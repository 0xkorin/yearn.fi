import {toAddress} from '@yearn-finance/web-lib/utils/address';

import type {TAddress, TDict} from '@yearn-finance/web-lib/types';

export const OPT_YVETH_WITH_REWARDS = toAddress('0x5B977577Eb8a480f63e11FC615D6753adB8652Ae');
export const OPT_YVDAI_WITH_REWARDS = toAddress('0x65343F414FFD6c97b0f6add33d16F6845Ac22BAc');
export const OPT_YVUSDT_WITH_REWARDS = toAddress('0xFaee21D0f0Af88EE72BB6d68E54a90E6EC2616de');
export const OPT_YVUSDC_WITH_REWARDS = toAddress('0xaD17A225074191d5c8a37B50FdA1AE278a2EE6A2');

export const OPT_YVETH_STACKING_CONTRACT = toAddress('0xE35Fec3895Dcecc7d2a91e8ae4fF3c0d43ebfFE0');
export const OPT_YVDAI_STACKING_CONTRACT = toAddress('0xf8126EF025651E1B313a6893Fcf4034F4F4bD2aA');
export const OPT_YVUSDT_STACKING_CONTRACT = toAddress('0xf66932f225cA48856B7f97b6F060f4c0D244Af8E');
export const OPT_YVUSDC_STACKING_CONTRACT = toAddress('0xB2c04C55979B6CA7EB10e666933DE5ED84E6876b');

export const OPT_REWARDS_TOKENS = [
	OPT_YVETH_STACKING_CONTRACT,
	OPT_YVDAI_STACKING_CONTRACT,
	OPT_YVUSDT_STACKING_CONTRACT,
	OPT_YVUSDC_STACKING_CONTRACT
];

export const VAULT_TO_STACKING: TDict<TAddress> = {
	[OPT_YVETH_STACKING_CONTRACT]: OPT_YVETH_WITH_REWARDS,
	[OPT_YVDAI_STACKING_CONTRACT]: OPT_YVDAI_WITH_REWARDS,
	[OPT_YVUSDT_STACKING_CONTRACT]: OPT_YVUSDT_WITH_REWARDS,
	[OPT_YVUSDC_STACKING_CONTRACT]: OPT_YVUSDC_WITH_REWARDS
};

export const STACKING_TO_VAULT: TDict<TAddress> = {
	[OPT_YVETH_WITH_REWARDS]: OPT_YVETH_STACKING_CONTRACT,
	[OPT_YVDAI_WITH_REWARDS]: OPT_YVDAI_STACKING_CONTRACT,
	[OPT_YVUSDT_WITH_REWARDS]: OPT_YVUSDT_STACKING_CONTRACT,
	[OPT_YVUSDC_WITH_REWARDS]: OPT_YVUSDC_STACKING_CONTRACT
};