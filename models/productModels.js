import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
   {
      productName: {
         type: String,
         required: true
      },
      
      size: {
         type: String,
         required: true
      },

      description: {
         type: String,
         required: true
      },

      image: {
         type: Array,
         required: true
      },

      category: {
         type: String,
         required: true
      }
   }
)

let Dataset = mongoose.model.product || mongoose.model('product', productSchema)
export default Dataset