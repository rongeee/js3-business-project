const ROOT_URL = "https://frebi.willandskill.eu/";

export default class {
  async register(firstName, lastName, email, password, organisationName, organisationKind) {
    const url = `${ROOT_URL}auth/users/`;
    const payload = {
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind,
    };

    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async activateUser(uid, token) {
    const url = `${ROOT_URL}auth/users/activate/`;
    const payload = { uid, token };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async login(email, password) {
    const url = `${ROOT_URL}api-token-auth/`;
    const payload = { email, password };
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  async addCustomer(customer) {
    const url = `${ROOT_URL}api/v1/customers`;
    const payload = customer;

    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async getCustomer(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;

    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  async updateCustomer(id, customer) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;
    const payload = {
      name: customer.name,
      organisationNr: customer.organisationNr,
      vatNr: customer.vatNr,
      reference: customer.reference,
      paymentTerm: customer.paymentTerm,
      website: customer.website,
      email: customer.email,
      phoneNumber: customer.phoneNumber,
    };

    return fetch(url, {
      method: "PATCH",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload),
    });
  }

  async deleteCustomer(id) {
    const url = `${ROOT_URL}api/v1/customers/${id}/`;
    return fetch(url, {
      method: "DELETE",
      headers: this.getPrivateHeaders(),
    });
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token);
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN");
  }

  getCurrentUser() {
    const url = `${ROOT_URL}api/v1/me`;
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    });
  }

  getPublicHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }
  getPrivateHeaders() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.getToken()}`,
    };
  }
}
