function removeKthLinkedListNode(head, k) {
    
    if (k === 0) return head

    let runner = head
    let current = head

    while(k--) {
        if (runner)
            runner = runner.next
        else 
            return head
    }

    while(runner && runner.next) {
        current = current.next
        runner = runner.next 
    }

    if (!runner) {
        head = head.next
    } else {
        current.next = current.next
        ? current.next.next
        : null
    }

    return head
}