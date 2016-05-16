![](https://github.com/mcongrove/SARA/raw/master/SARA.png)

# SARA
Search and Rescue Application, entry for the 2016 Axway Global Hackathon.

# Team
 * Matthew Congrove
 * Remi Thillier
 * Joel Co
 * Neeraj Mishra
 
# What is SARA?

SARA is a platform for tracking and managing search and rescue and disaster relief operations. SARA consists of two applications, one for mobile and one for web.

The mobile application tracks Ground Team Leaders (GTL) and their team members as they progress along pre-planned routes; that information is available in the web interface for Incident Commanders (IC), who can use the data to assess progress and send new search tracks to the ground teams. The web interface can also be shared with local, state and federal ICs for inter-agency coordination.

# Why do we need SARA?

Currently, similar applications are available for tracking aircrews (and often made public through [ArcGIS](http://fema.maps.arcgis.com/home/webmap/viewer.html?webmap=792c0761b50a417fbb3eb61a58f43a60)), but none exist for tracking ground teams. Tracking these teams could be useful in determining search area coverage, especially during re-deployments to previously search grids.

# Who would use SARA?

Federal (e.g. Civil Air Patrol), State (e.g. Texas Task Force 1), and local (e.g. NASAR) organizations could benefit from using the application. Exported data from SARA could be of vital importance to response assessment at all levels of the NIMS system.

# How is Titanium used?

The GTL mobile application is built on Titanium, providing a large amount of coverage for various device types (which is important considering that most SAR organizations don't have funding to provide mobile devices with connectivity to every GTL).

# How is Arrow used?

Arrow is used to simplify communication between the mobile and web application, as well as for it's ability to quickly and easily export data into a variety of formats suitable for use within various agencies. The web interface is also built on top of Arrow Web to maximize efficiency and ensure stable access to the data.

# How is API Gateway used?

The API Gateway is used to secure the APIs and associated data, which is considered FOUO (For Official Use Only). The information can be considered extremely sensitive for a variety of reasons throughout all types of missions.