import {EXPO_API_URL } from '@env';

const createRun = async (run) => {
  const raw = await fetch(`${EXPO_API_URL}/run`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(run)
  });
  const response = await raw.json();
  return response;
};

const getAllRuns = async (userId) => {
  const raw = await fetch(`${EXPO_API_URL}/runs/${userId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response = await raw.json();
  const sorted = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return sorted;
};

const createRunTrace = async (runTrace) => {
  const raw = await fetch(`${EXPO_API_URL}/runTrace`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(runTrace)
  });
  const response = await raw.json();
  return response;
};

const createUser = async (user) => {
  const raw = await fetch(`${EXPO_API_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const response = await raw.json();
  return response;
};

const login = async (user) => {
  const raw = await fetch(`${EXPO_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const response = await raw.json();
  return response;
};

module.exports = { getAllRuns, createRun, createRunTrace, createUser, login };