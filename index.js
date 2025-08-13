const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
} = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const path = require("path");
const pino = require("pino");
const readline = require("readline");
const fs = require("fs").promises;
const chalk = require("chalk");
const { GenexVictim  } = require("./sin");
const axios = require("axios");

process.removeAllListeners("warning");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const logger = pino({
  level: "silent",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
      ignore: "pid,hostname",
    },
  },
});

const sessionDir = path.resolve(__dirname, "./Session");

async function checkInitialSession() {
  try {
    const files = await fs.readdir(sessionDir);
    if (files.length === 1 && files.includes("creds.json")) {
      console.log(
 chalk.bold.red(`
「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𝐒𝐘𝐒𝐓𝐄𝐌 𒋲 」
      
 ⚚ 𝐒𝐓𝐀𝐓𝐔𝐒 : ${chalk.yellow("Invalid Credentials")}
 ⚚ 𝐀𝐂𝐓𝐈𝐎𝐍 : ${chalk.cyan("Clearing Session Data")}
 ⚚ 𝐓𝐈𝐌𝐄   : ${chalk.green(new Date().toLocaleTimeString())}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
);
      await fs.rm(sessionDir, { force: true, recursive: true });
      console.log(chalk.blue("Successfully deleted the session folder"));
      return;
    }

    if (files.length === 0) {
  console.log(
  chalk.bold.magenta(`
「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」
      
 ⚚ 𝐒𝐓𝐀𝐓𝐔𝐒 : ${chalk.red("FOLDER NOT FOUND")}
 ⚚ 𝐀𝐂𝐓𝐈𝐎𝐍 : ${chalk.yellow("CREATING NEW")}
 ⚚ 𝐓𝐈𝐌𝐄   : ${chalk.green(new Date().toLocaleTimeString())}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
);
      return;
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(
console.log(
  chalk.bold.cyan(`
 「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」
      
 ⚚ STATUS : FOLDER NOT FOUND
 ⚚ ACTION : CREATING NEW
 ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━
`)
);
      return;
    }
    throw error;
  }
}

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);

  const sock = makeWASocket({
    printQRInTerminal: false,
    auth: state,
    browser: ["Ubuntu", "Chrome", "24.0.1"],
    logger,
    mobile: false,
  });

  let promptShown = false;
  let retries = 0;
  const maxRetries = 5;

  async function handleSession(statusCode) {
    try {
      const files = await fs.readdir(sessionDir);
      switch (statusCode) {
        case DisconnectReason.loggedOut:
          console.log(
chalk.bold.cyan(`
        「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 
      
⚚ STATUS : SESSION EXPIRED
⚚ ACTION : CLEARING SESSION
⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
          );
          await fs.rm(sessionDir, { force: true, recursive: true });
          console.log(chalk.blue("Successfully deleted the session folder"));
          process.exit(0);
          break;
      }
    } catch (error) {
      console.log(chalk.redBright("Failed to handle session:", error));
      process.exit(1);
    }
    return false;
  }

  sock.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (!sock.authState.creds.registered && !promptShown) {
      promptShown = true;
      console.clear();
      console.log(
chalk.bold.blue(`
        「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 
      
  ⚚ AUTHENTICATION REQUIRED`)


      rl.question(chalk.blue("  Password: "), async (inputPassword) => {
        const correctPassword = "Lord Shadow";

        if (inputPassword !== correctPassword) {
          console.log(chalk.red("\n Wrong Password Bastard!"));
          process.exit(1);
        }

        console.clear();
        console.log(
          chalk.bold.green(`
 「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 
      
 ⚚ PHONE NUMBER REGISTRATION`)
        );

        rl.question(chalk.cyan(" ⚚ Number  : "), async (number) => {
          const phoneNumber = number.replace(/[^0-9]/g, "");
          const code = await sock.requestPairingCode(phoneNumber);
          const formattedCode = code.match(/.{1,4}/g)?.join("-") || code;
          console.clear();
          console.log(
chalk.bold.red(`
        「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 
    
 ⚚ NUMBER : ${phoneNumber}
 ⚚ CODE   : ${formattedCode}
 ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
          );
        });
      });
    }

    if (connection === "close") {
      const statusCode =
        lastDisconnect?.error instanceof Boom
          ? lastDisconnect?.error?.output?.statusCode
          : 0;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      const needsReconnect = await handleSession(statusCode);

      if ((shouldReconnect || needsReconnect) && retries < maxRetries) {
        retries++;
        console.log(
chalk.bold.cyan(`
       🦠 「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 🦠
      
  ⚚ STATUS : Connection Lost
  ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
        );

        setTimeout(connectToWhatsApp, 3000);
      } else if (retries >= maxRetries) {
        console.log(
          chalk.redBright(`
       ⚠ 「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」 ⚠
      
 ⚚ STATUS : Failed to reconnect
 ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
        );
        process.exit(1);
      }
    }

    if (connection === "open") {
      console.clear();
      console.log(
        chalk.bold.red(`
      「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」
      
 ⚚ STATUS : Connected
 ⚚ OWNER  : @Vortex_Shadow2563
 ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
      );
      retries = 0;
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0];
    await GenexVictim (sock, msg);
  });

  return sock;
}

async function startWhatsApp() {
  await checkInitialSession();
  await connectToWhatsApp();
}

startWhatsApp().catch((error) => {
  console.error(
    chalk.red(`
      「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𒋲 」
      
 ⚚ STATUS : Fatal Error
 ⚚ ERROR  : ${error.message}
 ⚚ TIME   : ${new Date().toLocaleTimeString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━`)
  );
  process.exit(1);
});
