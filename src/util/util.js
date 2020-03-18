export function countDate(last_reply_at) {
  const nowYear = new Date().getFullYear(),
    nowDate = new Date().getTime(),
    timeDistance = (nowDate - new Date(last_reply_at).getTime()) / 60000,
    dayNum = timeDistance / 1400,
    replyYear = new Date(last_reply_at).getFullYear();
  let replyTime;
  if (timeDistance < 1) {
    replyTime = "1 分钟前";
  } else if (1 <= timeDistance && timeDistance < 60) {
    replyTime = Math.floor(timeDistance) + " 分钟前";
  } else if (timeDistance < 1440) {
    replyTime = Math.floor(timeDistance / 60) + " 小时前";
  } else if (dayNum < 31) {
    replyTime = Math.floor(dayNum) + " 天前";
  } else if (31 <= dayNum && dayNum <= 58) {
    replyTime = "1 个月前";
  } else if (dayNum <= 59) {
    if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) {
      replyTime = "28 天前";
    } else {
      replyTime = "2 个月前";
    }
  } else if (dayNum <= 60) {
    replyTime = "2 个月前";
  } else if (dayNum <= 91) {
    replyTime = "3 个月前";
  } else if (dayNum <= 121) {
    replyTime = "4 个月前";
  } else if (dayNum <= 152) {
    replyTime = "5 个月前";
  } else if (dayNum <= 182) {
    replyTime = "6 个月前";
  } else if (dayNum <= 213) {
    replyTime = "7 个月前";
  } else if (dayNum <= 243) {
    replyTime = "8 个月前";
  } else if (dayNum <= 274) {
    replyTime = "9 个月前";
  } else if (dayNum <= 304) {
    replyTime = "10 个月前";
  } else if (dayNum <= 335) {
    replyTime = "11 个月前";
  } else if (dayNum <= 365) {
    if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) {
      replyTime = "11 个月前";
    } else {
      replyTime = "1 年前";
    }
  } else if (dayNum > 365) {
    replyTime = nowYear - replyYear + " 年前";
  }
  return replyTime;
}
