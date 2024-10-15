// 2 types: Global Execution Context, Function Execution Context
// Further, memory context/phase, execution context/phase
// if there are three functions say one,two and three then, in one() if we call two() and three()
// then in call stack at bottom global execution context is present above that one() is present above that two() is present
// above that three() is present. Once the execution is complete then three() will be removed, then two(), then one() from stack. 