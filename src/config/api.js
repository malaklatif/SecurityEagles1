import axios from 'axios';
// API Service Class using OOP principles
class ApiService {
  constructor() {
    this.baseURL = 'https://bdf023177831.ngrok-free.app/api';
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "ngrok-skip-browser-warning": "69420"
      },
    });

    // Request interceptor to add auth token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor to handle common errors
    this.client.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          // Handle unauthorized - redirect to login
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Generic request method
  async request(config) {
    try {
      const response = await this.client(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // GET request
  async get(endpoint, params = {}) {
    const data = await this.request({
      method: 'GET',
      url: endpoint,
      params,
    });
    console.log('GET', endpoint, 'response:', data);
    return data;
  }

  // POST request
  async post(endpoint, data = {}) {
    return this.request({
      method: 'POST',
      url: endpoint,
      data,
    });
  }

  // PUT request
  async put(endpoint, data = {}) {
    return this.request({
      method: 'PUT',
      url: endpoint,
      data,
    });
  }

  // DELETE request
  async delete(endpoint) {
    return this.request({
      method: 'DELETE',
      url: endpoint,
    });
  }

  // PATCH request
  async patch(endpoint, data = {}) {
    return this.request({
      method: 'PATCH',
      url: endpoint,
      data,
    });
  }

  // Auth specific methods
  async login(credentials) {
    return this.post('/auth/login/', credentials);
  }

  async register(userData) {
    return this.post('/auth/register/', userData);
  }

  async logout() {
    return this.post('/auth/logout/');
  }

  async refreshToken() {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }
    return this.post('/auth/refresh/', { refresh: refreshToken });
  }

  async forgotPassword(email) {
    return this.post('/auth/forgot-password/', { email });
  }

  async resetPassword(token, newPassword) {
    return this.post('/auth/reset-password/', { token, new_password: newPassword });
  }

  // User specific methods
  async getCurrentUser() {
    return this.get('/auth/user/');
  }

  async updateProfile(userData) {
    return this.put('/auth/user/', userData);
  }

  async changePassword(passwords) {
    return this.post('/auth/change-password/', passwords);
  }

  // News specific methods
  async getNews(page = 1, search = '', category = '') {
    const params = new URLSearchParams({
      page: page.toString(),
      page_size: '12',
      ordering: '-published_at',
    });

    if (search) params.append('search', search);
    if (category && category !== 'All') params.append('category_slug', category);

    return this.get(`/news/?${params.toString()}`);
  }

  async getNewsCategories() {
    return this.get('/news/categories/');
  }

  async getNewsArticle(slug) {
    return this.get(`/news/${slug}/`);
  }

  async likeNews(slug) {
    return this.post(`/news/${slug}/like/`);
  }

  // Event specific methods
  async getEvents(page = 1, search = '', category = '') {
    const params = new URLSearchParams({
      page: page.toString(),
      page_size: '12',
      ordering: '-start_date',
    });

    if (search) params.append('search', search);
    if (category && category !== 'All') params.append('category_slug', category);

    return this.get(`/events/?${params.toString()}`);
  }

  async getEventCategories() {
    return this.get('/events/categories/');
  }

  async getEventDetails(slug) {
    return this.get(`/events/${slug}/`);
  }

  async registerForEvent(slug) {
    return this.post(`/events/${slug}/register/`);
  }

  async unregisterFromEvent(slug) {
    return this.delete(`/events/${slug}/register/`);
  }

  async getMyEvents() {
    return this.get('/events/my-events/');
  }

  async createEvent(eventData) {
    return this.post('/events/', eventData);
  }

  async updateEvent(slug, eventData) {
    return this.put(`/events/${slug}/`, eventData);
  }

  async deleteEvent(slug) {
    return this.delete(`/events/${slug}/`);
  }

  // Health check
  async healthCheck() {
    return this.get('/health/');
  }
}

// Create and export a singleton instance
const apiService = new ApiService();

// Export the class for testing purposes
export { ApiService };

// Export the singleton instance for use in components
export default apiService;

// Backward compatibility - export the old apiRequest function
export const apiRequest = async (endpoint, options = {}) => {
  const method = options.method || 'GET';
  const data = options.body ? JSON.parse(options.body) : {};
  
  try {
    switch (method.toUpperCase()) {
      case 'GET':
        return await apiService.get(endpoint, options.params);
      case 'POST':
        return await apiService.post(endpoint, data);
      case 'PUT':
        return await apiService.put(endpoint, data);
      case 'DELETE':
        return await apiService.delete(endpoint);
      case 'PATCH':
        return await apiService.patch(endpoint, data);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  } catch (error) {
    throw error;
  }
};
