import sys



def factorial(n):
   if n == 1:
       return n
   elif n == 0:
       return "The factorial of 0 is 1"
   elif n < 0:
       return "Sorry, factorial does not exist for negative numbers"
   else:
       return n*factorial(n-1)

user_input = sys.argv[1]

print factorial(int(user_input))