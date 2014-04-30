module Prisoner where

import Prelude

betray = "D"
trust = "C"

incr :: Number -> Number
incr x = x + 1

always :: String -> String
always x = x

alwaysBetray = always betray
alwaysTrust = always trust
