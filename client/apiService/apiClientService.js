
const createRun = async (run) => {
  const raw = await fetch('http://192.168.1.125:3000/run', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(run)
  });
  const response = await raw.json();
  return response;
};

const getAllRuns = async () => {
  const raw = await fetch('http://192.168.1.125:3000/runs', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  });
  const response = await raw.json();
  return response;
};

const createRunTrace = async (runTrace) => {
  const raw = await fetch('http://192.168.1.125:3000/runTrace', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(runTrace)
  });
  const response = await raw.json();
  return response;
};

module.exports = { getAllRuns, createRun, createRunTrace };