export const handleCopy = async (text: string) => {
  await window.navigator.clipboard.writeText(text)
  alert('클립보드에 복사되었습니다.')
}
