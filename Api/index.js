"use strict";

function _mockApi(credential) {
  return credential === "admin"
    ? {
        message: "Welcome, Mr Speedwagon",
        code: 200,
      }
    : {
        message: "Unauthorized user, try again.",
        code: 403,
      };
}

const _generateRandomInterval = () =>
  (parseInt(Math.random() * 10, 10) + 1) * 100;

function authenticate(credential) {
  return new Promise((res, _rej) => {
    setTimeout(() => res(_mockApi(credential)), _generateRandomInterval());
  });
}
