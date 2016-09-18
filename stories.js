function sendQuickEmotion(recipientId) {
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: "Which emoji represents your current emotion?",
      metadata: "DEVELOPER_DEFINED_METADATA",
      quick_replies: [
        {
          "content_type":"text",
          "title":"😡",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_ACTION"
        },
        {
          "content_type":"text",
          "title":"😂",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
        },
        {
          "content_type":"text",
          "title":"😒",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_DRAMA"
        },
        {
          "content_type":"text",
          "title":"😭",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
        },
        {
          "content_type":"text",
          "title":"😊",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_COMEDY"
        },
      ]
    }
  };

  callSendAPI(messageData);
}

// function sendEmotionQuery(recipientId) {
//   console.log("SENDEMTIONQUERY INVOKED, recipientID", recipientId);

//   var messageData = {
//     recipient: {
//       id: recipientId
//     },
//     message: {
//       attachment: {
//         type: "template",
//         payload: {
//           template_type: "button",
//           text: "How are you feeling?",
//           buttons:[{
//             type: "web_url",
//             url: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif",
//             title: "😡"
//           },
//           {
//             type: "phone_number",
//             title: "Suicidal",
//             payload: "+18002738255"
//           },
//           {
//             type: "web_url",
//             url: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif",
//             title: "😒"
//           }, 
//           {
//             type: "web_url",
//             url: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif",
//             title: "😍"
//           },
//           {
//             type: "web_url",
//             url: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif",
//             title: "😭"
//           }]
//         }
//       }
//     }
//   };  

//   console.log(messageData);

//   callSendAPI(messageData);
// }

module.exports = {
  sendQuickEmotion: sendQuickEmotion
};


case 'image':
  sendImageMessage(senderID);
  break;

case 'gif':
  sendGifMessage(senderID);
  break;

case 'audio':
  sendAudioMessage(senderID);
  break;

case 'video':
  sendVideoMessage(senderID);
  break;

  /*
   * Send a video using the Send API.
   *
   */
  function sendFileMessage(recipientId) {
    var messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: "file",
          payload: {
            url: SERVER_URL + "/assets/test.txt"
          }
        }
      }
    };

    callSendAPI(messageData);
  }

case 'file':
  sendFileMessage(senderID);
  break;

case 'emotion':
  sendEmotionQuery(senderID);
  break;

  case 'button':
    sendButtonMessage(senderID);
    break;

  case 'generic':
    sendGenericMessage(senderID);
    break;

  case 'receipt':
    sendReceiptMessage(senderID);
    break;

  case 'quick reply':
    sendQuickReply(senderID);
    break;        

    case 'read receipt':
      sendReadReceipt(senderID);
      break;        

    case 'typing on':
      sendTypingOn(senderID);
      break;        

    case 'typing off':
      sendTypingOff(senderID);
      break;        

    case 'account linking':
      sendAccountLinking(senderID);
      break;

      /*
       * Account Link Event
       *
       * This event is called when the Link Account or UnLink Account action has been
       * tapped.
       * https://developers.facebook.com/docs/messenger-platform/webhook-reference/account-linking
       * 
       */
      function receivedAccountLink(event) {
        var senderID = event.sender.id;
        var recipientID = event.recipient.id;

        var status = event.account_linking.status;
        var authCode = event.account_linking.authorization_code;

        console.log("Received account link event with for user %d with status %s " +
          "and auth code %s ", senderID, status, authCode);
      }