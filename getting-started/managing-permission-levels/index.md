# 🛡️ Managing Permission Levels

ACENji offers a flexible role management system designed for both **global roles** and **location-based permissions** using a structured concept called **Levels**.

Global roles are created and managed at the organizational level, outside of any specific app. These roles define what a user can do across the entire ACENji platform—such as managing users, configuring settings, or accessing reports.

To further support large or distributed organizations, ACENji allows you to define an security entity called **Levels**. There could be up to **12 static Levels** for assigning permissions based on location, department, or any hierarchy you choose.

These Levels are fully customizable and allow your team to reflect the unique structure of your organization.

> 🧭 **Example:** A healthcare organization might use its Levels like this:  
> - Level 1: State  
> - Level 2: County  
> - Level 3: City  
> - Level 4: ZIP Code  
> - Level 5: Building  
> - Level 6: Wing  
> - Level 7: Floor  
> - Level 8: Room  
> - Level 9: Bed  
> *(Levels 10–12 remain available for even more precision if needed)*

Each role can then be assigned permissions **based on one or more Levels**—for instance, granting a supervisor access to all rooms on a particular floor in a specific building.

> 🖼️ A visual representation of how Levels work will be shown below.

This section focuses on defining these **global roles and level-based permissions**.  
If you want to assign permissions within a specific app, workflow, or dataset, continue to the next section on [App-Level Permissions](#/user-management/app-permissions/index).

## 🧱 Defining Levels

Before assigning location-based or hierarchy-based permissions to a role, you must first define the **Levels** that reflect your organization’s structure.

![Define Levels](../../../../images/managing-permission-levels/create-levels.png)

ACENji allows you to define up to **12 static Levels**, which can represent anything from geographic regions to organizational units—such as:

- States  
- Regions  
- Cities  
- ZIP Codes  
- Departments  
- Buildings  
- Floors  
- Rooms  
- Any other category relevant to your operations  

> 🔧 These levels are fully customizable and do not follow a fixed pattern. You define what each level means.

### ➕ How to Create Levels

To define Levels in your workspace:

1. Navigate to:  
   `Dashboards → Account → Admin → Levels`
2. Click **Create Level**
3. Name your level (e.g., "Building", "Region", "Team Zone")
4. Save — your level is now available for role assignments and staff access controls.

📌 You can create up to 12 levels in total. The order you create them in defines their **hierarchical position** (Level 1 to Level 12).

### 👥 Associate Staff with Levels

Once your Levels are defined, you can associate individual users or staff members with their respective levels:

![Associate users to levels](../../../../images/managing-permission-levels/grant-staff-access.png)

1. Navigate to:  
   `Dashboards → Account → Admin → Staff Access`
2. Select a staff member
3. Assign them to the appropriate level(s) — for example, a building manager may be assigned to:
   - Level 1: State - Michigan  
   - Level 2: City - Grand Rapids  
   - Level 5: Building - Central Admin Tower  
4. Save changes — the staff member now has permissions scoped to those levels.

> 📘 Once Levels are set and assigned, you can apply them in your **role definitions** to control what users can do and where.


------

## Need Help?
Start your journey at
<a href="https://acenji.com" target="_blank">ACENji's NoCode Platform</a> — accessible on both web and mobile browsers. Our intuitive interface helps you ease into building apps without needing any prior technical experience.
If you have any questions or need help at any point, our team is here for you.  
Feel free to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">reach out to us</a> — we’re happy to assist.

<div class="custom-box">
<i class="icon"><img src="./images/info-icon.png" alt="icon" style="width: 40px; height: 23px;"></i><p>If you have any questions, please don't hesitate to contact us.</p>

<div class="content"> </div>

</div>

<style>
.custom-box {
background-color: #d9edf7;
border-left: 5px solid #0e6ace;
padding: 10px;
margin-top: 20px;
margin-bottom: 20px;
width: 80%;
}

.custom-box i {
font-size: 20px;
margin-right: 10px;
color: #333333;
}
</style>
<div style="margin-top:50px;"></div>


<style>
.custom-box {
background-color: #d9edf7;
border-left: 5px solid #0e6ace;
padding: 10px;
margin-bottom: 10px;
width: 80%;
display: flex;
align-items: center;
}

.custom-box .icon {
width: 40px;
height: 23px;
margin-right: 10px;
}

.custom-box p {
margin: 0;
}
</style>
<div style="margin-top:50px;"></div>
  
# Questions? 

If you have any questions, please don't hesitate to <a href="https://www.acenji.com/contact" target="_blank" rel="noopener">contact us.</a>   
Alternatively, you can submit an issue on this <a href="https://github.com/acenji/acenji-help/issues" target="_blank" rel="noopener">platform.</a>
  

# Useful Links:

<span class="triangle"></span> ACENji Sign Up - https://help.acenji.com/#/../../getting-started/signup/index     
<span class="triangle"></span> ACENji Elements - https://help.acenji.com/#/./elements/index    
<span class="triangle"></span> Quick Start Conditional Logic - https://help.acenji.com/#/./conditional-logic/quick-start/index 

<style>
.triangle {
display: inline-block;
width: 0;
height: 0;
border-style: solid;
border-width: 5px 0 5px 5px;
border-color: transparent transparent transparent #595959;
margin-left: 10px;
}
</style>
<div style="margin-top:30px;"></div>


# Was this article helpful?

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdh85v8pzUJN7oEcyPxnGlOQdLPsvcXnrvLg7mXo32eNocXpg/viewform?embedded=true" width="640" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('video');
    video.load(); // forces control/UI re-render
  });
</script>

