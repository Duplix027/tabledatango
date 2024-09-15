import useState from 'react';

export function GetPrompts() {
  const prompts = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];  // Get from AI
  return prompts;
}
export function GetKeyword() {
  // const prompts = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'];  // Get from AI
  const keyword = ('fast food');           // Using this keyword as a query
  return keyword;                                                // Return it to be consumed by button fns
}