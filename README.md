# Wanna Bet

An onchain peer-to-peer betting tool. Whitepaper and development is currently in progress.

## How it works

There are two contracts:

- `Bet.sol`, which is initiated with the following parameters:
  1. `address` _creator - The bet creator
  2. `address` _participant - A participant
  3. `uint256` _amount - A token amount
  4. `address` _token - The erc20 token contract with which the bet is using
  5. `string` _message - An attached message
  6. `address` _arbitrator - An arbitrator (one who selects the winner)
  7. `uint256` _validFor - Time in seconds that the _participant has to accept or decline after bet creation
- `BetFactory.sol`, which creates new Bet contracts and holds the initial state of all bets created from it.

## Features

- [x] Contract
  - [x] Build basic functionality
  - [x] Add time as a function parameter to `Bet.sol` (e.g. after x days, if no accept or decline, cancel bet and return tokens to bet creator)
  - [x] Add custom errors
  - [x] Add getter functions bet arrays
  - [x] Allow getting/reading bets with a betId, contract address, or user address
  - [ ] ~~Add acceptBet, declineBet, and settleBet functions to factory contract, given a contract address as a param~~
  - [ ] ~~Add ability for participant to send tokens directly to the contract to accept, making it so they only need to execute one txn~~
  - [ ] ~~Add ability to cancel a bet (i.e. prior to participant acceptance, giving the option for the bet creator and/or the arbitrator to return the funds without selecting a winner)~~
- [ ] Frame
  - [ ] 'Create new' flow
    - [x] Add state
    - [x] Add bet info that builds as state is filled in from user input
    - [ ] Add validation for contract rules (e.g. creator can't be participant, etc.)
    - [x] Add tx for authorizing usdc transfer
    - [ ] Add tx for creating the bet
  - [ ] 'My bets' flow
    - [ ] Add bet view that allows the user to view their active bets in reverse chronological
  - [ ] 'Help' flow
- [ ] Farcaster Bot
  - [ ] Generate signer
  - [ ] Set up webhooks for when a bet is created, accepted, and settled
  - [ ] Set up casts for when an event is received
