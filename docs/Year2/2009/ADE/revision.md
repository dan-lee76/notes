# Revision

## Amortised Cost
### Incremental Strategy Analysis 
- Amortized time of a push operation $O(n)$
### Doubling Strategy Analysis
- Amortized time of a single push operation $O(1)$

## Stability
Often sort objects according to some comparison function. Equal with respect to the desired ordering, but not necessarily that they have the same contents
## Master Theorem
$$T(n) = aT(n/b)+f(n)$$
Case 1: $f(n)=O(n^c)$ with $c<log_ba$. Therefore: $T(n) = \theta(n^{log_ba})$ 

Case 2: $f(n)=\theta(n^c(\log n)^k)$ with $c=log_ba, k\ge0$. Therefore: $T(n) = \theta(n^c(log_ba)^{k+1})$ 

Case 3: $f(n)=\Omega(n^c)$ with $c>log_ba$. Therefore: $T(n) = \theta(f(n))$ 

## Bubble & Selection-Sort
```
void bubbleSort(int arr[]){
	int i,j,temp;
	for(i = arra.length-1; i>-; i--){
		for(j = 0; j<i;j++){
			temp = array[j];
			arr[j] = arr[j+1];
			arr[j+1] = temp;
		}
	}
}
```
```
void selectionSort(int arr[]){
	int i, j, temp, pos_greatest;
	for(i = arr.length-1; i>0; i--){
		pos_greatest = 0;
		for(j = 0; j<i;j++){
			if(arr[j] >= arr[pos_greatest])
				pos_greatest = j;
		}
		if (i != pos_greatest) {
		temp = arr[i];
		arr[i] = arr[pos_greatest];
		arr[pos_greatest] = temp;
		}
	}
}
```
Complexity is $O(n^2)$
## Insertion Sort
```
void insertionSort(int arr[]){
	for(int j=1; j<arr.length; j++){
		int temp = arr[j];
		int i = j;
		while(i>0 && arr[i-1] > temp){
			arr[i] = arr[i-1]
			i--;
		}
		arr[i] = temp;
	}
}
```
Complexity is $O(n^2)$

## Merge-Sort
```
mergesort(A){
	divide A into left L and right R arrays
	mergesort(L)
	mergesort(R)
	A=merge(L,R)
}
```
Complexity is $O(n\log n)$
## Quick Sort
```
qs(A){
	p = pivot(A)
	(L,R) = partition(A,p)
	qs(L)
	qs(R)
}
```
Complexity is $O(n\log n)$

## MST
MST - Minimum spanning sub-graph that is, a subset of the edges that is connected and that contains every node. Do not confuse a minimum TREE with a minimum shortest PATH

## Psudocode
### Prim's Algo
- Start by picking any vertex M 
- Choose the shortest edge from M to any other vertex N 
- Add edge (M,N) to the MST 
- Loop: 
	- Continue to add at every step a shortest edge from a vertex in the “MST so far” to a vertex outside, until all vertices are in the MST 
	- (If there are multiple shortest edges, then can take any arbitrary one)
#### How is this optimal?
- Let G be a weighted connected graph, and 
	- let V1 and V2 be a partition of the vertices of G into two disjoint non-empty sets
	- Furthermore, let e be an edge with minimum weight from among those with one endpoint in V1 and the other in V2
	- There is an MST that has e as one of its edges
- Can add edge e to T and remove some other edge between V1 and V2 and obtain a better MST
- Algorithm adds a minimum weight edge between V1 and V2, and so this edge must be part of some MST.

### Change Giving
```
Input: x[0],…,x[n-1] and K 
Initialise: Y[0] = 0, // as can give a change of 0, with 0 coins and Y[m] = -1 

for (i=0 ; i<n; i++) { //consider effect of x[i]
	for (m=K-x[i] ; m>=0 ; m--) { // scan array
		if (Y[m] >= 0 ) { // value m was achievable with x[0]…x[i-1] using Y[m] coins, 
		// so, m+x[i] is now achievable with Y[m]+1 coins 
		// but might already have found a better answer 
		// stored as Y[m + x[i] ] so then take the best 
		if (Y[m + x[i] ] == -1 ) 
			Y[ m + x[i] ] = Y[m]+1 
		else 
			Y[ m + x[i] ] = min( Y[m + x[i] ] , Y[m]+1 )
}
```
### Dijkstra
```
PriorityQueue PQ = new PriorityQueue(); 
PQ.add( start node s ) 
while (! PQ.isempty()){ u = PQ.dequeue(); 
if ( u == target ) return dist[u]; 
for(each v adjacent to u){ 
	add v to the PQ if not present and not already closed, else update the distance using 
	if(dist[v] > (dist[u]+weight(u,v)){ 
		dist[v] = (dist[u]+weight(u,v)); 
	} 
} add u to list of closed nodes PQ.reorder(); // because some distances changed } return INFINITY; // no path to target
```
Complexity = $O((|V|+|E|)* \log (|V|))$
### FW
```
foreach k = 1, … (so “foreach nk ∈ V”) 
	foreach i ∈ V 
		foreach j ∈ V 
			d(i,j,k+1) = min( d(i,j,k), d(i,k+1,k) + d(k+1,j,k) )
```
Complexity = $O(|V|^3)$ 