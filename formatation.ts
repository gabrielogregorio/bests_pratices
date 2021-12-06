// bad code
function getStatistics() {
    const { playerId } = getPlayerLogged()
  const statistics =  getPlayerStastics(playerId)
     return statistics
}

// good code
function getStatistics() {
  const { playerId } = getPlayerLogged()
  const statistics = getPlayerStastics(playerId)
  return statistics
}

// bad code
class PostService {
    async Create({ title, description, user, tags, imgs }) {
      let newPost = new Post({ title, description, user, tags, imgs, user})
      await newPost.save()
      return newPost
    }
    async FindByIdAndUpdate(id,  { title, description, user, tags, imgs }) {
      let post = await Post.findOneAndUpdate({_id: id}, {$set:
        { title, description, user, tags, imgs }}, {new: true})
      return post
    }
    async FindById(id) {
      let post = await Post.findById(id).populate('user')
      return post
    }
}  

// good code. complete ideas separate by line
class ControllPersonByStreets {
    Create({ title, description, user, tags, imgs }) {
      let newPost = new Post({ title, description, user, tags, imgs, user})
      await newPost.save()
      return newPost
    }

    checkColisionRedObjects(id,  { title, description, user, tags, imgs }) {
      let post = await Post.findOneAndUpdate({_id: id}, {$set:
        { title, description, user, tags, imgs }}, {new: true})
      return post
    }

    async FindById(id) {
      let post = await Post.findById(id).populate('user')
      return post
    }
}  


// good code.functions are called in order
class ControllPersonByStreets {
  function executeOnStepFrame() {
        this.checkColisionDinamicObjects()
        this.resolveColisionStaticObjects()
    }

    function checkColisionDinamicObjects() {
        this.resolveColisionDinamicObjects();
    }

    function resolveColisionDinamicObjects() {}

    function resolveColisionStaticObjects() {}

    function checkColistionStaticObjects() {
        this.resolveColisionStaticObjects()
    }

}  

// bad code.
class ControllPersonByStreets {
  function checkColisionDinamicObjects() {
    this.resolveColisionDinamicObjects();
  }

  function checkColistionStaticObjects() {
    this.resolveColisionStaticObjects()
  }

  function executeOnStepFrame() {
      this.checkColisionDinamicObjects()
      this.resolveColisionStaticObjects()
  }

  function resolveColisionStaticObjects() {}

  function resolveColisionDinamicObjects() {}

}  
