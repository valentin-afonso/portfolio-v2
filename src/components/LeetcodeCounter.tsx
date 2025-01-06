export default async function LeetcodeCounter() {
  const data = await fetch("https://leetcode-stats-api.herokuapp.com/valafso");
  const leetcode = await data.json();
  if (!leetcode) return;
  return <div>{leetcode.totalSolved}</div>;
}
