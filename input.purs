module Main where
import Debug.Trace
main = trace "Hello, World!"

data Person = Person { name :: String, age :: Number }

showPerson :: Person -> String
showPerson (Person o) = o.name ++ ", aged " ++ show o.age

examplePerson :: Person
examplePerson = Person { name: "Bonnie", age: 26 }