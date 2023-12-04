#include <iostream>
using namespace std;

int main() {
	int r = 5;
	for (int i = 1; i <= r; i++) {
	    for (int j = 0; j <= i * 2 -1 ; j++) {
	    
	        if(j%2 == 0) {
	         cout << "* ";
             }
	        else {
	        cout<<j/2 + 1 <<" ";
            
            }
            }
	    
	    cout<<endl;
	    
	    
	}
	return 0;
}



/**
 //result is as follows

* 1 
* 1 * 2 
* 1 * 2 * 3 
* 1 * 2 * 3 * 4 
* 1 * 2 * 3 * 4 * 5 
 
*/
