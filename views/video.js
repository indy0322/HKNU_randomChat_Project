var peer = new Peer(); //PeerJS 라이브러리의 인스턴스를 생성, PeerJS는 WebRTC의 signaling 과정을 쉽게 해주는 라이브러리


const myFace = document.getElementById("myFace");
const peerFace = document.getElementById("peerFace");
let localStream;
let remoteStream;

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:{
      echoCancellation:true //오디오 사용 + 에코 제거
    }
  }).then(stream =>{
    myFace.muted = true;
    myFace.srcObject = stream;
    localStream = stream;
    myFace.play();
    myFace.volume=0;
    myFace.muted=true;
    console.log('local스트림 저장되고 출력중');
  
    // peer.on('call',(call)=>{
    //   console.log('답장보내는중');
    //   call.answer(localStream);
  
    //   call.on('stream',userVideoStream=>{
    //     peerFace.srcObject = userVideoStream;
    //     remoteStream = userVideoStream;
    //     peerFace.play();
    //     peerFace.volume=0;
    //     peerFace.muted=0;
        
    //   })
    //   peerFace.style.display='block';
  
    // })
  
  })
  
  
  function connectToNewUser(userId,stream){
    const call = peer.call(userId,stream); //다른 사용자의 Peer ID로 연결 요청, 'userId'에 WebRTC Call 요청 보냄. stream은 내 영상/음성임
    console.log('call보내는중')
    
  
    call.on('stream',(userVideoStream)=>{
      peerFace.srcObject = userVideoStream;
      remoteStream = userVideoStream;
      peerFace.onloadedmetadata = () => {
        peerFace.play().catch((error) => {
            console.warn("peerFace play() error:", error);
        });
      };
      console.log('play');
  
    })
   peerFace.style.display='block';
   
  }