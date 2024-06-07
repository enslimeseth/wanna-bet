import { TransactionContext } from "frog";
import type { BetInfoState } from "../types";
import { Address } from "viem";
import { betFactoryAbi } from "../contracts/betFactoryAbi";
import {
  MAINNET_ARBITRUM_USDC_CONTRACT_ADDRESS,
  MAINNET_BET_FACTORY_CONTRACT_ADDRESS,
} from "../contracts/addresses";

export const createTxn = async (
  c: TransactionContext<{ State: BetInfoState }, "/tx/create">
) => {
  const { previousState } = c;

  const usdcAmount = BigInt(previousState.amount * 10 ** 6);
  const validForSeconds = BigInt(previousState.validForDays * 24 * 60 * 60);

  return c.contract({
    abi: betFactoryAbi,
    to: MAINNET_BET_FACTORY_CONTRACT_ADDRESS,
    chainId: "eip155:42161",
    functionName: "createBet",
    args: [
      previousState.participant as Address,
      usdcAmount,
      MAINNET_ARBITRUM_USDC_CONTRACT_ADDRESS,
      previousState.message,
      previousState.arbitrator as Address,
      validForSeconds,
    ],
  });
};