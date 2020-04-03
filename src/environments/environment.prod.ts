export const environment = {
  production: true,
  BACKEND_IP: window["env"]["BACKEND_IP"] || 'http://127.0.0.1:8000',
  JWT_BACKEND_IP: window["env"]["JWT_BACKEND_IP"] || '127.0.0.1:8000'
};
