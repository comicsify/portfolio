
```javascript
  const folders = await cloudinary.api.resources(
    {
      type: 'upload',
      prefix: 'arnold/'
    },
    function(error, result) {
      console.log(error)
    }
  )

  const result = await cloudinary.search
    .expression('folder:thorn/*')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()
```
