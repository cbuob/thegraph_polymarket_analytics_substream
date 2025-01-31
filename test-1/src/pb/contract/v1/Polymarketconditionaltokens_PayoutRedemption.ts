// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../google/protobuf/Timestamp";

export class Polymarketconditionaltokens_PayoutRedemption {
  static encode(
    message: Polymarketconditionaltokens_PayoutRedemption,
    writer: Writer
  ): void {
    writer.uint32(10);
    writer.string(message.evtTxHash);

    writer.uint32(16);
    writer.uint32(message.evtIndex);

    const evtBlockTime = message.evtBlockTime;
    if (evtBlockTime !== null) {
      writer.uint32(26);
      writer.fork();
      Timestamp.encode(evtBlockTime, writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.evtBlockNumber);

    writer.uint32(42);
    writer.bytes(message.redeemer);

    writer.uint32(50);
    writer.bytes(message.collateralToken);

    writer.uint32(58);
    writer.bytes(message.parentCollectionId);

    writer.uint32(66);
    writer.bytes(message.conditionId);

    const indexSets = message.indexSets;
    if (indexSets.length !== 0) {
      for (let i: i32 = 0; i < indexSets.length; ++i) {
        writer.uint32(74);
        writer.string(indexSets[i]);
      }
    }

    writer.uint32(82);
    writer.string(message.payout);
  }

  static decode(
    reader: Reader,
    length: i32
  ): Polymarketconditionaltokens_PayoutRedemption {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Polymarketconditionaltokens_PayoutRedemption();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evtTxHash = reader.string();
          break;

        case 2:
          message.evtIndex = reader.uint32();
          break;

        case 3:
          message.evtBlockTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 4:
          message.evtBlockNumber = reader.uint64();
          break;

        case 5:
          message.redeemer = reader.bytes();
          break;

        case 6:
          message.collateralToken = reader.bytes();
          break;

        case 7:
          message.parentCollectionId = reader.bytes();
          break;

        case 8:
          message.conditionId = reader.bytes();
          break;

        case 9:
          message.indexSets.push(reader.string());
          break;

        case 10:
          message.payout = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  evtTxHash: string;
  evtIndex: u32;
  evtBlockTime: Timestamp | null;
  evtBlockNumber: u64;
  redeemer: Uint8Array;
  collateralToken: Uint8Array;
  parentCollectionId: Uint8Array;
  conditionId: Uint8Array;
  indexSets: Array<string>;
  payout: string;

  constructor(
    evtTxHash: string = "",
    evtIndex: u32 = 0,
    evtBlockTime: Timestamp | null = null,
    evtBlockNumber: u64 = 0,
    redeemer: Uint8Array = new Uint8Array(0),
    collateralToken: Uint8Array = new Uint8Array(0),
    parentCollectionId: Uint8Array = new Uint8Array(0),
    conditionId: Uint8Array = new Uint8Array(0),
    indexSets: Array<string> = [],
    payout: string = ""
  ) {
    this.evtTxHash = evtTxHash;
    this.evtIndex = evtIndex;
    this.evtBlockTime = evtBlockTime;
    this.evtBlockNumber = evtBlockNumber;
    this.redeemer = redeemer;
    this.collateralToken = collateralToken;
    this.parentCollectionId = parentCollectionId;
    this.conditionId = conditionId;
    this.indexSets = indexSets;
    this.payout = payout;
  }
}
