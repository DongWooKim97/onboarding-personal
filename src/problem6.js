function problem6(forms) {
  const emailList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[0]) // 닉네임의 길이로 sort한 후 이에 대해 이메일 리스트 따로 저장
  const nicknameList = forms.sort((a, b) => a[1].length - b[1].length).map(i => i[1]); // 닉네임의 길이로 sort한 후 이에 대해 닉네임 리스트 따로 저장
  
  if(!inputValidCheck(emailList, nicknameList)) {
    return 'error'
  }
  
  const duplicateCrewEmail = [];
  const leastDuplicateWord = 2;

  for (let i = 0; i < nicknameList.length; i++) { // 모듈화 가능
    for (let j = 0; j <= nicknameList[i].length - 2; j++) { // 모듈화 가능
      const headSliceWord = nicknameList[i].slice(0 + j, leastDuplicateWord + j);
      for (let k = 0; k < nicknameList.length; k++) { // 모듈화 가능
        // i !==k를 걸어준 이유는 자기 자신을 자른 문장은 검사할 필요 X -> 오히려 검사하게 되면 
        // 푸시 할 수도 있기 때문에!!
        if ((i !== k) && (nicknameList[k].includes(headSliceWord))) duplicateCrewEmail.push(emailList[k]) // 모듈화 가능
      }
    }
  }
  return [...new Set(duplicateCrewEmail)].sort();

}

function inputValidCheck(emailList, nicknameList) {
  if (!crewMembersInRange(nicknameList)) return false;
  if (!nicknameLengthInRange(emailList)) return false;
  if (!isNicknameKorean(nicknameList)) return false;
  if (!correctEmail(emailList)) return false;
  if (!emailLengthInRange(emailList)) return false;
  return true;
}

function crewMembersInRange(nicknameList) {
  if (nicknameList.length < 1 || nicknameList.length > 10000) return false;
  return true
}

function isNicknameKorean(nicknameList) {
  const regExp = /^[가-힣]*$/;
  const checkKoreanArray = nicknameList.map(i => regExp.test(i))
  if (checkKoreanArray.includes(false)) return false;
  return true
}

function nicknameLengthInRange(nicknameList) {
  const checkNicknameLengthArray = nicknameList.map(i => !i < 1 || !i > 20);

  if (checkNicknameLengthArray.includes(false)) return false;
  return true;
}

function correctEmail(emailList) {
  const checkEmailTypeArray = emailList.map(i => i.split('@')[1]);
  if (correctDomainType(checkEmailTypeArray)) return true
  return false;
}

function correctDomainType(domainList) {
  const correctDomain = '@email.com'
  const checkDomainTypeArray = domainList.filter(i => i !== correctDomain);
  if (domainList.length !== checkDomainTypeArray.length) return false;
  return true;

}

function emailLengthInRange(emailList) {
  const checkEmailLengthArray = emailList.map(i => !i.length < 11 || !i.length >= 20)
  if (checkEmailLengthArray.includes(false)) return false;
  return true;
}

module.exports = problem6;
