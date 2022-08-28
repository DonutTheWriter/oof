var images = ["Family-640x360.png", "IMG-20220418-WA0204.jpg" , "IMG-20220418-WA0204.jpg", "IMG_20220825_154917.jpg","IMG-20220418-WA0185.jpg", "IMG_20220825_153759.jpg"];
var names = ["Family Book","Charu kalita (grandma)", "Aseema kalita (mom)", "Moonmi kalita (aunt)", "Rajkumar kalita (uncle)", "DambaruDhar Hazarika (father)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
