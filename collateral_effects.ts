// collateral effects => BAD
function checkPassword1(email, password) {
  // valid data
  // verify in database
  // allow access
  // block access

  // check access or checkPasswordAndInitializeSession() ???????????????? but, this make many things!
  // initializeSession() => ?????????
}

// good
function initializeSession() {}
function checkPassword2(email, password) {
  // valid data
  // verify in database
  // allow access
  // block access
}

// this should check password , not initialize session.
// This is a bad, this is a collateral effects
// This creates a coupling, this function can only be called when it is safe to login.
// And of course the function is missing something important, and it should cause bugs!