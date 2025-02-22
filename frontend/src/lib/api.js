const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:6000';

export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
}

export async function postData(endpoint, formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
      method: 'POST',
      body: formData,
      headers: {
        // Remove Content-Type for FormData
        // It will be set automatically with boundary
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error posting to ${endpoint}:`, error);
    throw error;
  }
} 