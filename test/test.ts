import {VServer} from "../vserver";
import {VRouter} from "../VRouter";
import * as express from "express";

const v: VServer = new VServer();
const router = new VRouter();
router.addGetRoute('/', (req, resp) => { resp.send("OK"); });
router.addGetRoute('/prova', (req, resp) => { resp.send("OK2"); });
v.addSubApp(router);
v.listent();
