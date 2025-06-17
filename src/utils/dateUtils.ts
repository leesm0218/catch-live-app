// 서울 시간(KST)으로 변환하는 유틸리티 함수
export const toKstDate = (date: string | null): string => {
  const kstOffset = 9 * 60; // KST is UTC+9
  const dateString = date ?? new Date().toISOString();
  const utcDate = new Date(dateString);
  const utcTime = utcDate.getTime();
  const kstTime = utcTime + kstOffset * 60 * 1000;
  const newDate = new Date(kstTime).toISOString();

  //YYYY-MM-DD HH:mm 형식으로 변환
  return newDate.replace('T', ' ').substring(0, 16);
};
