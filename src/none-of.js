import * as R from 'ramda'

export const noneOf = R.complement(R.flip(R.contains))
