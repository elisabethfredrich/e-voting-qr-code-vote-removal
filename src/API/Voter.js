import Parse from "parse";

export async function addVoter(ID) {
  let user = new Parse.User();
  user.set("username", ID);
  user.set("password", ID);
  await user.signUp();
}

export async function loginVoter(ID) {
  await Parse.User.logIn(ID, ID);
}

export default function getCurrentUser() {
  let currentUser = Parse.User.current();
  return currentUser;
}

export async function saveVote(vote) {
  const Voter = getCurrentUser();
  Voter.set("Vote", vote);
  try {
    await Voter.save();
    console.log("voter");
  } catch (error) {
    console.log("Error saving vote: " + error);
  }
}

export async function saveReportOfProblem(problem) {
  const Voter = getCurrentUser();
  Voter.set("Problem_Reporting", problem);
  try {
    await Voter.save();
  } catch (error) {
    console.log("Error saving report of problem: " + error);
  }
}
