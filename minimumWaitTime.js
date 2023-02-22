/* 
You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query 
can be executed at a time, but the queries can be executed in any order.

A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed
second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the 
durations of the first two queries.
The wait time of the first query number is 0.
You're allowed to mutate the array.

sample input:
{
  "queries": [3, 2, 1, 2, 6]
}

output: 17
*/

export function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b );
  let totalWait = 0;
  let eachTime = 0;
  for (let i = 1; i < queries.length; i++) {
    eachTime += queries[i - 1];
    totalWait += eachTime;
  }
  return totalWait;
} 

/* TS
export function minimumWaitingTime(queries: number[]) : number {
  queries.sort((a, b) => a - b );
  let totalWait : number = 0;
  let eachTime : number = 0;
  for (let i = 1; i < queries.length; i++) {
    eachTime += queries[i - 1];
    totalWait += eachTime;
  }
  return totalWait;
} 
*/