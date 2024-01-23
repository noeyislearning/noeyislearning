---
name: "Fruit Classifier Model"
description: "This repository contains code and a trained Keras model for classifying fruits using image recognition and machine learning. The model was trained on a dataset of fruit images from the Fruits & Vegetables by Jorge B's dataset."
is_active: false
is_repository_only: true
thumbnail_URL: "https://i.imgur.com/fHCg8Wa.png"
dev_date: {
  start: "2023-10-15",
  end: "2023-10-16"
}
---

# Fruit Classifier Model

Research Date: October 2023

This dataset is from Kaggle and can be found [here](https://www.kaggle.com/datasets/jorgebailon/fruits-vegetables).

REPOSITORY LINK: [noeyislearning/fruit-classifier-model](https://github.com/noeyislearning/fruit-classifier-model)

PROJECT LINK (GOOGLE DRIVE): [tinyurl.com/ya93ct2p](http://tinyurl.com/ya93ct2p)

---

This repository contains code and a trained Keras model for classifying fruits using image recognition and machine learning. The model was trained on a dataset of fruit images from the Fruits &amp; Vegetables by Jorge B's dataset.

The model was trained using a transfer learning approach, where a pre-trained convolutional neural network (CNN) model was fine-tuned on the fruit image dataset. The pre-trained CNN model was the ResNet50 architecture with weights trained on the ImageNet dataset.

To use the model, simply load it into a TensorFlow or Keras session and pass it a fruit image. The model will output a probability distribution over the 5 fruit categories. The category with the highest probability is the predicted fruit type.

---

## Showcase

### The Model

![Teachable Machine by Google](https://i.imgur.com/UhZ2XjI.png)

### Training the Model

![Training the Model](https://i.imgur.com/QGAXtFK.png)

### Testing the Model

![Testing the Model](https://i.imgur.com/fHCg8Wa.png)

---

## Acknowledgements

### Model Training

This model was trained using Google's Teachable Machine platform. The code for training the model was generated by Teachable Machine and modified to work with TensorFlow 2.0. The code for loading the model and making predictions was also generated by Teachable Machine and modified to work with TensorFlow 2.0.

---

### Dataset Resources

No description provided.

---

## Disclaimer

This model is for research purposes only and should not be used to identify or classify fruits in a real-world setting.

---

## Skills Used

- OpenCV
- Machine Learning
- Deep Learning
- TensorFlow
- Keras
- Classifier Model

---

## Development Team

- [Francis Ignacio](https://www.linkedin.com/in/noeyislearning/)