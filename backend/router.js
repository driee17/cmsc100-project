import { login, getRegister, postRegister } from "./controllers/auth_controller.js";
import { listProductsByType, StorePage, Checkout, AddInventory, RemoveInventory, listUser, confirmorder, cancelOrder, addToCart, salesReport, cancelledOrders, pendingOrders, UpdateInventoryUser } from "./controllers/store_controller.js";

const router = (app) => {
  app.post("/login",login);
  app.get("/register",getRegister);
  app.post("/register",postRegister);

  app.get("/store-page", StorePage);
  app.post("/checkout", Checkout);
  app.post("/add-item", AddInventory);
  app.post("/remove-item", RemoveInventory);
  app.get("/users",listUser);

  app.post("/confirm-order",confirmorder);
  app.post("/cancel-order",cancelOrder);
  app.post("/add-to-cart",addToCart);
  app.post("/remove-cart-item", UpdateInventoryUser);
  app.get("/sales",salesReport);
  app.get("/cancelled-order", cancelledOrders);
  app.get("/pending-orders",pendingOrders);

};

export default router;
