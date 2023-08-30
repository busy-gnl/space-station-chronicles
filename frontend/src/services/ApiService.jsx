const backendURL = import.meta.env.VITE_BACKEND_URL;

export const createCart = async (userId) => {
  const response = await fetch(`${backendURL}/carts`, {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    console.error("Failed to create cart:", response);
    throw new Error("Failed to create cart");
  }
  console.info("cart created :>> ", response.json());
  return response.json();
};

export const getCartByUserId = async (userId) => {
  const response = await fetch(`${backendURL}/carts/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  return createCart(userId);
};

export async function addCartLine(cartLineData) {
  console.info("Payload for addCartLine:", cartLineData);
  try {
    const response = await fetch(`${backendURL}/cart-line`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(cartLineData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      // Gestion des erreurs détaillée
      if (response.status === 400) {
        throw new Error("Invalid data provided. Please check and try again.");
      } else if (response.status === 401) {
        throw new Error("Unauthorized. Please login again.");
      } else if (response.status === 500) {
        throw new Error("Internal Server Error. Please try again later.");
      } else {
        throw new Error(`Failed to add cart line: ${response.statusText}`);
      }
    }
    // Vérification de la réponse de l'API
    if (!responseData.id || !responseData.quantity) {
      throw new Error(
        "Unexpected response from the server. Cart line not added."
      );
    }
    console.info("responseData :>> ", responseData);
    return responseData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const removeProductFromCart = async (cartLineId) => {
  const response = await fetch(`${backendURL}/cart-line/${cartLineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) {
    throw new Error("Failed to remove cart line");
  }
  return response.json();
};

export const getCartWithProduct = async (cartId) => {
  const response = await fetch(`${backendURL}/carts/user/full/${cartId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  if (response.ok) {
    console.info("data :>> ", data);
    return data;
  }
  return new Error("Failed to get cart");
};

export const updateCartLine = async (cartLineId, updatedInfo) => {
  const response = await fetch(`${backendURL}/cart-line/${cartLineId}`, {
    method: "PATCH",
    body: JSON.stringify(updatedInfo),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.json();
};
