export default async function LeetcodeCounter() {
  return;
  const data = await fetch("https://leetcode-stats-api.herokuapp.com/valafso");
  if (!data) return;
  const leetcode = await data.json();
  if (!leetcode) return;
  return <div>{leetcode.totalSolved}</div>;
}
