#include<iostream>
using namespace std;

//Creating a Node
class Node {
    public:
    int data ;    //Data of the linked list;
    Node* next ;  // Poniter heading towardd next node;
  
//Constructor to initialize the Node;
  Node(int data){
    this-> data = data;
    next = NULL;
  }
//Destructor to del the node
  ~Node(){
      int value = this-> data;
      //memory free
      if(this->next != NULL){
          delete next;
          this->next = NULL;
      }
      cout<<"memory is free for node with data: "<< value << endl;
  }
};

//Insertion at beginning 
void insertAtHead(Node* &head, int data){
  Node* temp = new  Node(data) ;
  temp->next = head;
  head = temp ;
}

//Insertion at End
void insertionAtEnd(Node* &head , int data ){
 Node* curr;
 Node* temp = new Node(data);// Step-1;
 curr = head;
 while( curr->next != NULL){
   curr = curr -> next;   //step-2;
 }
   curr->next = temp;
}

//Insertion At a position
void insertAtPosition(Node* &head, int pos , int data ){
  if(pos==1){
    insertAtHead(head,data);
    return;
  }

  int cnt;
  Node* curr = head;
  Node* newNode = new Node(data);  //Step-1
  while(cnt < pos-1){
    curr = curr->next;   //Step-2
    cnt++;
  }
  if(curr->next == NULL){
    insertionAtEnd(head,data);
  }
  newNode->next= curr->next;  //Step-3
  curr->next= newNode;       //Step-4
}

//Printing the LL
void print(Node* &head){

  Node* temp = head;  // Step-1 : 
  
if(head->next == NULL){ //Handling the Exception: When there is only one node;
  cout<< head->data << " ";
  temp = temp->next;  
}

while(temp != NULL){
 cout<< temp->data << " "; // Step-2
 temp= temp->next;         // Step-3
 }
cout << endl;
}

//Deletion of First Node
void del_F_Node( Node* &head){
  Node* temp = head;
  head = head->next;
   temp->next = NULL;
  delete temp;
 return;
}
//Deletion of Last Node
void del_L_Node( Node* &head)
{
  Node* tail = head ;
  Node* prev = NULL;
   while(tail->next !=NULL){  //Step-1 : 
      prev = tail;    
       tail= tail->next;
   }
    prev-> next =NULL;  // Step-2
    delete tail;       //  Step-3
}
//Deletion at any position
void del_Given_Node( Node* &head, int pos ){

Node* curr = head;
Node* prev = NULL;
int cnt = 1;
while(cnt < pos){
   prev =curr; 
   curr= curr -> next;
   cnt++;
}
 prev-> next = curr-> next;
 curr -> next = NULL;
 delete curr;
}





int main(){
//Creating A Node Singly Node
 Node* n1 = new Node( 5 );
 Node* head = n1;


//Printing the LL 
 print(head);


//Insertions in Singly LinkedList
  // 1st - At Begining : Before Head
  insertAtHead(head, 1);
  print(head);
  // 2nd - At End : After tail
  insertionAtEnd(head,2);
  print(head);
  // 3rd- At a Position 
  insertAtPosition(head, 2 ,3);
  print(head);
   


//Deletion in Singly LinkedList
 //Deletion of first Node
  del_F_Node(head);
  print(head);
 //Deletion of Last Node
  del_L_Node(head);
  print(head);
 //Deletion at any position
  del_Given_Node(head,3);



return 0;
}


