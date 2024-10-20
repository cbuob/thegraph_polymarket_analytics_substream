// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.3

import { Writer, Reader } from "as-proto/assembly";
import { Timestamp } from "../../google/protobuf/Timestamp";

export class Polymarketconditionaltokens_ConditionPreparation {
  static encode(
    message: Polymarketconditionaltokens_ConditionPreparation,
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
    writer.bytes(message.conditionId);

    writer.uint32(50);
    writer.bytes(message.oracle);

    writer.uint32(58);
    writer.bytes(message.questionId);

    writer.uint32(66);
    writer.string(message.outcomeSlotCount);
  }

  static decode(
    reader: Reader,
    length: i32
  ): Polymarketconditionaltokens_ConditionPreparation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Polymarketconditionaltokens_ConditionPreparation();

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
          message.conditionId = reader.bytes();
          break;

        case 6:
          message.oracle = reader.bytes();
          break;

        case 7:
          message.questionId = reader.bytes();
          break;

        case 8:
          message.outcomeSlotCount = reader.string();
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
  conditionId: Uint8Array;
  oracle: Uint8Array;
  questionId: Uint8Array;
  outcomeSlotCount: string;

  constructor(
    evtTxHash: string = "",
    evtIndex: u32 = 0,
    evtBlockTime: Timestamp | null = null,
    evtBlockNumber: u64 = 0,
    conditionId: Uint8Array = new Uint8Array(0),
    oracle: Uint8Array = new Uint8Array(0),
    questionId: Uint8Array = new Uint8Array(0),
    outcomeSlotCount: string = ""
  ) {
    this.evtTxHash = evtTxHash;
    this.evtIndex = evtIndex;
    this.evtBlockTime = evtBlockTime;
    this.evtBlockNumber = evtBlockNumber;
    this.conditionId = conditionId;
    this.oracle = oracle;
    this.questionId = questionId;
    this.outcomeSlotCount = outcomeSlotCount;
  }
}
