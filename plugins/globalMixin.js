import Vue from 'vue'

var mixin = {
    methods: {
        getStaticMediaLink(folder, file, format) {
            return process.env.baseURL + '/' + folder + '/' + file + '.' + format
        }
    }
}

Vue.mixin(mixin)