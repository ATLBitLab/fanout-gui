import { authenticatedLndGrpc } from "lightning";
import { readFileSync } from "fs";
import os from "os";
import path from "path";

const homeDir = os.homedir();

const macaroonPath = path.join(
  homeDir,
  "electronlnd/data/chain/bitcoin/regtest/admin.macaroon",
);
const certPath = path.join(homeDir, "electronlnd/tls.cert");
const socket = "localhost:10009";
const protosPath = path.join(
  __dirname,
  "../../node_modules/lightning/grpc/protos",
);

export const getLnd = async () => {
  const macaroon = readFileSync(macaroonPath, { encoding: "base64" });
  const cert = readFileSync(certPath, { encoding: "base64" });

  const { lnd } = authenticatedLndGrpc({
    macaroon,
    cert,
    socket,
    path: protosPath,
  });

  return lnd;
};
