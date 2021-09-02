
import Vuex from 'vuex'


export default new Vuex.Store(
    {
        state: {
            sampleBlogCards: [
                { blogTitle: "Blog Card 001", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
                { blogTitle: "Blog Card 002", blogCoverPhoto: "stock-2", blogDate: "May 1, 2021" },
                { blogTitle: "Blog Card 003", blogCoverPhoto: "stock-3", blogDate: "May 1, 2021" },
            ],
            editPost: null,
        },
        mutations: {

        },
        actions: {

        },
        modules: {

        }
    }
)