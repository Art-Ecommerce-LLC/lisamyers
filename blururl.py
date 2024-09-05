import requests
from PIL import Image
import base64
from io import BytesIO

def generate_blur_data_url(image_url, output_size=(10, 10)):
    """
    Generate a base64-encoded data URL of a small resized image from a remote URL.
    
    Args:
        image_url (str): URL of the input image.
        output_size (tuple): The size to which the image will be resized (default is 10x10).
    
    Returns:
        str: Base64-encoded data URL of the resized image.
    """
    # Fetch the image from the provided URL
    response = requests.get(image_url)
    response.raise_for_status()  # Ensure the request was successful
    
    # Open the image from the downloaded content
    img = Image.open(BytesIO(response.content))

    # Resize the image to the specified small size
    img = img.resize(output_size)

    # Save the image to a BytesIO buffer
    buffered = BytesIO()
    img.save(buffered, format="JPEG")

    # Get the base64-encoded string of the image
    img_base64 = base64.b64encode(buffered.getvalue()).decode()

    # Create the data URL for use in Next.js Image component
    data_url = f"data:image/jpeg;base64,{img_base64}"
    
    return data_url

if __name__ == "__main__":
    # Replace with the URL to your image on the Amazon CDN
    image_url = ""
    
    # Generate the base64-encoded data URL
    blur_data_url = generate_blur_data_url(image_url)

    # Print the result
    print("Base64-encoded Data URL:\n")
    print(blur_data_url)
