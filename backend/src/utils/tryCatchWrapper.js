const wrapAsync = (fn) => {
  return (req, res, next) => {
    // If you wrote: next(fn(req, res, next)) 
    // This is wrong!
    
    // It should be:
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

export default wrapAsync