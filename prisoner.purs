module Prisoner where

import Prelude
data Maybe a = Nothing | Just a

betray = "D"
trust = "C"

incr :: Number -> Number
incr x = x + 1

always :: String -> String
always x = x

alwaysBetray = always betray
alwaysTrust = always trust

titForTat :: Maybe String -> String
titForTat x = case x of 
	Just y -> y
	Nothing -> always trust
