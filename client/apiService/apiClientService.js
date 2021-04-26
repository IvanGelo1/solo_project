import { EXPO_API_URL } from '@env'

const createRun = async (run) => {
  const raw = await fetch(`${EXPO_API_URL}/run`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(run)
  })
  const response = await raw.json()
  return response
}

const getAllRuns = async (userId) => {
  const raw = await fetch(`${EXPO_API_URL}/runs/${userId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    }
  })
  const response = await raw.json()
  const sorted = response.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  return sorted
}

const createRunTrace = async (runTrace) => {
  const raw = await fetch(`${EXPO_API_URL}/runTrace`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(runTrace)
  })
  const response = await raw.json()
  return response
}

const createUser = async (user) => {
  const raw = await fetch(`${EXPO_API_URL}/user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const response = await raw.json()
  return response
}

const login = async (user) => {
  const raw = await fetch(`${EXPO_API_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  const response = await raw.json()
  return response
}

const getTrace = async (id) => {
  const raw = await fetch(`${EXPO_API_URL}/runTrace/${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  const response = await raw.json();
  const parsed = JSON.parse(response[0].mapTrace);
  return parsed;
}

const updateDistance = async (id, distance) => {
  const raw = await fetch(`${EXPO_API_URL}/user/${id}/${distance}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response = await raw.json();
  return response;
}

const getAllUsers = async () => {
  const raw = await fetch(`${EXPO_API_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response = await raw.json();
  const sorted = response.sort((a, b) => b.distance - a.distance);
  return sorted;
}

const getPublicRuns = async () => {
  const raw = await fetch(`${EXPO_API_URL}/public`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response = await raw.json();
  return response;
}

const createPublicRun = async (publicRun) => {
  const raw = await fetch(`${EXPO_API_URL}/public`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(publicRun)
  })
  const response = await raw.json();
  return response;
}

module.exports = { getAllRuns, createRun, createRunTrace, createUser, login, getTrace, updateDistance, getAllUsers, getPublicRuns }
