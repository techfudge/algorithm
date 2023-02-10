// Java program to count total
// number of words in the string
import java.io.*;
class GFG
{
	
	// Function to count total number
	// of words in the string
	public static int
	countWords(String str)
	{
		
		// Check if the string is null
		// or empty then return zero
		if(str == null || str.isEmpty())
			return 0;
		
		int wordCount = 0;
		
		boolean isWord = false;
		int endOfLine = str.length() - 1;
		
		// Converting the given string
		// into a character array
		char[] ch = str.toCharArray();
		
		for (int i = 0; i < ch.length; i++) {
			
			// Check if the character is a letter
			// and index of character array doesn't
			// equal to end of line that means, it is
			// a word and set isWord by true
			if (Character.isLetter(ch[i])
				&& i != endOfLine)
			
				isWord = true;
			
			// Check if the character is not a letter
			// that means there is a space, then we
			// increment the wordCount by one and set
			// the isWord by false
			else if (!Character.isLetter(ch[i])
					&& isWord) {
			
				wordCount++;
				isWord = false;
			}
			
			// Check for the last word of the
			// sentence and increment the wordCount
			// by one
			else if (Character.isLetter(ch[i])
					&& i == endOfLine)
				wordCount++;
		}
		
		// Return the total number of
		// words in the string
		return wordCount;
		
	}
	
	// Driver Code
	public static void main(String args[])
	{
		
		// Given String str
		String str =
		"One two	 three\n four\tfive ";
		
		// Print the result
		System.out.println("No of words : " +
		countWords(str));
	}
}
// This code is contributed by Prashant Srivastava
