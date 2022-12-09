import { Router } from "express";

import { CreateClienteController } from "./modules/clients/useCases/createClient/CreateClientController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";

import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { UpdateDeliveryManController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/updateDeliverymanController";

import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";

import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController";

const routes = Router()

const createClientController = new CreateClienteController()
const createDeliveryController = new CreateDeliveryController()
const findAllAvailableController = new FindAllAvailableController()
const createDeliverymanController = new CreateDeliverymanController()
const findAllDeliveriesClientController = new FindAllDeliveriesController()
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const updateEndDateController = new UpdateEndDateController()
const updateDeliverymanController = new UpdateDeliveryManController()

routes.post("/client/", createClientController.handle)
routes.post("/deliveryman", createDeliverymanController.handle)
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)

routes.post("/client/authenticate", authenticateClientController.handle)
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle)

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle)
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesClientController.handle)
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle)

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle)

export {routes}